'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Config = require('./config');
const router = require('./router/router');
const port = process.env.PORT || 9090;

app.use(Config.AccessControl);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.init(app);

app.listen(port, () => console.log(`payments api listening on port: ${port}...`));