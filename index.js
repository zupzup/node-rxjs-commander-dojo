'use strict';

const commander = require('commander');
const Rx = require('rxjs/Rx');
const JSONStream = require('JSONStream');
const fs = require('fs');
const RxNode = require('rx-node');

const fileStream = fs.createReadStream('files/products.json').pipe(JSONStream.parse('products'));
RxNode.fromStream(fileStream).subscribe((x) => {
    console.log(x);
});
