#!/usr/bin/env node --harmony

'use strict';

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const faker = require('faker');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/data/:id', (req, res) => {
    const rnd = getRandomInt(200, 4000);
    setTimeout(() => {
        const result = {
            id: req.params.id,
            product: {
                name: faker.commerce.productName(),
                color: faker.commerce.color(),
                price: faker.commerce.price(),
                supplier: faker.company.companyName()
            }
        };
        res.send(JSON.stringify(result));
    }, rnd);
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

http.listen(4000, () => {
    console.log('Listening on localhost:4000');
    let i = 0;
    setInterval(() => {
        io.emit('event', {id: i});
        i++;
    }, 300);
});
