const express = require('express');
const book = require('./routes/book');
const router = express.Router();

module.exports = () => {
    router.use('/book',book());

    return router;
};