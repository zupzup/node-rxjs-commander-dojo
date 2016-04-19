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

- Split up the products.json file into smaller files (1 for each product, named by code) and write them into a split/ folder, use streaming [x] (split-products)
- Do the same with the brands, split them up in files named "brand_code.json" (split-brands)
- From each product file, take the code and brand details and create a new concatenated json file, but only for products which have a brand (collect-branded-products)
    - Do this in parallel, max. 2 at a time
- Record and log how long each step takes
- Record and log how many products are collected for each brand
- Implement error handling for corrupt files (test by using files in the /corrupt folder)
