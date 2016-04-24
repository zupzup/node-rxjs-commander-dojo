#!/usr/bin/env node --harmony

'use strict';

const program = require('commander');
const Rx = require('rxjs/Rx');
const fs = require('fs');


function split() {
    const readFile = Rx.Observable.bindNodeCallback(fs.readFile);
    const writeFile = Rx.Observable.bindNodeCallback(fs.writeFile);
    const $read = readFile('files/products.json')
        .map(input => JSON.parse(input))
        .pluck('products')
        .flatMap(product => product);

    $read.subscribe((product) => {
        const fileName = `result/${product.code}.json`;
        const $write = writeFile(fileName, JSON.stringify(product));
        $write.subscribe(() => console.log(`Finished writing ${fileName}`));
    });
}

program
    .version('1.0.0')
    .option('-s --split', 'splits products and brands into files by code')
    .parse(process.argv);

if (program.split) {
    split();
}
