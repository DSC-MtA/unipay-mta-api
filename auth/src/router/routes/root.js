const express = require('express');
const router = express.Router();

const handlers = require('../handlers/root');

router.get('/', handlers.helloAuth);

module.exports = router;