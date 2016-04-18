'use strict';

const commander = require('commander');
const Rx = require('rxjs/Rx');

const testObs = Rx.Observable.of(1, 2, 3);

testObs.subscribe((x) => {
    console.log(x);
});

