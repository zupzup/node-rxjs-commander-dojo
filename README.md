# node-rxjs-commander-dojo
Coding Dojo with NodeJS, RxJS and commander.js

# Setup

- npm install
- npm run dev
- ./toolio.js

# Utilities
- npm check for linting with eslint

debugging with:

https://github.com/node-inspector/node-inspector

# Docs
- http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html
- https://github.com/tj/commander.js/
- https://nodejs.org/api/fs.html
- https://github.com/Reactive-Extensions/rx-node/blob/master/doc/api/nodejs.md

# Tasks

# Simple Transformations and IO

-  -s / --split
    - Split up the products.json file into smaller files (1 for each product, {code}.json) and write them into a result/ folder
    - Do the same with the brands, split them up in files named {code}.json"
-  -c / --collect
    - create a new concatenated json file with the product code and brand data (code, brand: {}), but only for products which have a brand (collect-branded-products)

# A Reactive File Importer

- -w / --watch
    - watch the "import" folder for changes
        - use chokidar for file-watching
        - https://github.com/paulmillr/chokidar
    - when a file comes in, read and transform it in a seperate thread
        - we are only interested in code/name/categoryId
    - when you gathered 5 products from a certain category, concatenate them and log them
    - use the "files/importProducts{1,2,3}" files for testing

# A Reactive Streaming Client

- -f / --filter
    - socket.io server ./socket, runs on http://localhost:4000 
    - on "/data" you get a stream of unfiltered data
    - subscribe to that stream
        - for each value, make a request to /data/{id}
    - print the results
        - in the order you received the id's
    - only print once every second

# A Reactive Web Server

Server Endpoint:

- Standard HTTP Server
- Observable from requests
- call multiple things..

