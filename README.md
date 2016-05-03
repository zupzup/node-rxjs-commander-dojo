# node-rxjs-commander-dojo
Coding Dojo with NodeJS, RxJS and commander.js

# Setup

- npm install
- npm run dev

# Utilities
- npm check for linting with eslint

# Docs
- http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html
- https://github.com/tj/commander.js/
- https://github.com/dominictarr/JSONStream
- https://nodejs.org/api/fs.html
- https://github.com/Reactive-Extensions/rx-node/blob/master/doc/api/nodejs.md

# Tasks

- Split up the products.json file into smaller files (1 for each product, {code}.json) and write them into a split/ folder (split-products)
- Do the same with the brands, split them up in files named {code}.json" (split-brands)
- create a new concatenated json file with the product code and brand data (code, brand: {}), but only for products which have a brand (collect-branded-products)
- Record and log how long each step takes (--log-duration)
- Record and log how many products are collected for each brand (--log-amount)
- Implement error handling for corrupt files (test by using files in the /corrupt folder)
    - log erroneous files and handle the rest

FILE WATCH EXAMPLE:

* zB sowas wie testrunner -> wenn change, dann run
* oder service, das files pusht und jedes mal wenn ein file reinkommt, wird's verarbeitet
* watch auf folder, wenn file reinkommt -> transformation parallel, dann zusammenwarten bis 5 files fertig sind, diese dann in 1 file concatenaten

TCPDUMP example

* start tcpdump with some parameters (child_process) and parse data
* color things from the same source in the same color
* buffer for 10 entries or timeout

CURL für streams
* stream API (twitter?) anfahren und script dafür schreiben, das das verarbeitet und ordentlich formatiert
