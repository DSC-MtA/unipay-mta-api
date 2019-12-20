const express = require('express');
const router = express.Router();

const handlers = require('../handlers/root');

router.get('/', handlers.helloPayments);
router.get('/test', handlers.test);

module.exports = router;