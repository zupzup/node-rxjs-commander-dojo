'use strict';

const commander = require('commander');
const Rx = require('rxjs/Rx');
const fs = require('fs');

const readFile = Rx.Observable.bindNodeCallback(fs.readFile);
const source = readFile('files/products.json')
    .map(input => JSON.parse(input))
    .pluck('products')
    .flatMap(product => product);

source.subscribe((product) => {
    console.log(product);
    fs.writeFileSync(`result/${product.code}.json`, JSON.stringify(product));
});
