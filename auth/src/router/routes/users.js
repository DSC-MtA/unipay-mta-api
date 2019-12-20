const express = require('express');
const router = express.Router();

const handlers = require('../handlers/users');

router.get('/', handlers.getUserByName);
router.post('/', handlers.createUser);

module.exports = router;