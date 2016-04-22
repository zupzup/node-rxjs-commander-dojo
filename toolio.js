#!/usr/bin/env node --harmony

'use strict';

const program = require('commander');
const Rx = require('rxjs/Rx');
const fs = require('fs');


function split() {
    const readFile = Rx.Observable.bindNodeCallback(fs.readFile);
    const source = readFile('files/products.json')
    .map(input => JSON.parse(input))
    .pluck('products')
    .flatMap(product => product);

    source.subscribe((product) => {
        const fileName = `result/${product.code}.json`;
        fs.writeFileSync(fileName, JSON.stringify(product));
        console.log(`Finished writing ${fileName}`);
    });
}

program
    .version('1.0.0')
    .option('-s --split', 'splits products and brands into files  by code')
    .parse(process.argv);

if (program.split) {
    split();
}
