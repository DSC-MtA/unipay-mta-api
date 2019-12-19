'use strict';

const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('hello auth');
});

app.listen(PORT);
console.log(`auth-api listening on ${PORT}...`);