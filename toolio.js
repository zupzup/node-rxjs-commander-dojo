#!/usr/bin/env node --harmony

'use strict';

const program = require('commander');
const Rx = require('rxjs/Rx');
const fs = require('fs');
const chokidar = require('chokidar');
const readFile = Rx.Observable.bindNodeCallback(fs.readFile);
const writeFile = Rx.Observable.bindNodeCallback(fs.writeFile);
const readDirectory = Rx.Observable.bindNodeCallback(fs.readdir);

function writeForType(type, data) {
    const fileName = `result/${type}_${data.code}.json`;
    const $write = writeFile(fileName, JSON.stringify(data));
    $write.subscribe(() => console.log(`Finished writing ${fileName}`));
}

function split() {
    const $readProducts = readFile('files/products.json')
        .map(input => JSON.parse(input))
        .pluck('products')
        .flatMap(product => product);

    const $readBrands = readFile('files/brands.json')
        .map(input => JSON.parse(input))
        .pluck('brands')
        .flatMap(brand => brand);

    $readProducts.subscribe((data) => {
        writeForType('product', data);
    });

    $readBrands.subscribe((data) => {
        writeForType('brand', data);
    });
}

function collect() {
    const $fileNames = readDirectory('result')
        .map((fileNames) => {
            return Rx.Observable.from(fileNames);
        })
        .flatMap(fileName => fileName);

    const $products = $fileNames.filter(fileName => fileName.indexOf('product') !== -1);
    const $brands = $fileNames.filter(fileName => fileName.indexOf('brand') !== -1);

    $products.subscribe((fileName) => {
        const $readProduct = readFile(`result/${fileName}`)
            .map(file => JSON.parse(file))
            .filter(product => product.brand !== null);

        $readProduct.subscribe((product) => {
            $brands
                .filter(fileName => fileName.indexOf(product.brand) !== -1)
                .map(fileName => readFile(`result/${fileName}`))
                .flatMap(file => file)
                .map(file => JSON.parse(file))
                .map((brand) => {
                    return {
                        code: product.code,
                        brand: brand
                    };
                })
                .subscribe(collected => console.log(collected));
        });
    });
}

function watch() {
    const $watcher = Rx.Observable.fromEvent(chokidar.watch('./import'), 'add', path => path)
        .flatMap((path) => {
            return readFile(path)
                .map(file => JSON.parse(file))
                .pluck('products')
                .flatMap(product => product)
                .map((product) => {
                    return {
                        code: product.code,
                        name: product.name,
                        category: product.category
                    };
                });
        });

    $watcher
        .groupBy(product => product.category, product => product)
        .subscribe(($category) => {
            $category
                .bufferCount(5, 5)
                .subscribe((prod) => {
                    console.log($category.key);
                    console.log('==========================');
                    console.log(prod);
                    console.log('==========================');
                });
        });
}

function filter() {
    // TODO
}

program
    .version('1.0.0')
    .option('-s --split', 'splits products and brands into files by code')
    .option('-c --collect', 'collects products and their brands')
    .option('-w --watch', 'watches and importsf files')
    .option('-f --filter', 'filters the values from the stream')
    .parse(process.argv);

if (program.split) {
    split();
}

if (program.collect) {
    collect();
}

if (program.watch) {
    watch();
}

if (program.filter) {
    filter();
}
