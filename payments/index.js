'use strict';

const express = require('express');
const app = express();
const PORT = 9090;

app.get('/', (req, res) => {
    res.send('hello payments');
});

app.listen(PORT);
console.log(`payments-api listening on ${PORT}...`);