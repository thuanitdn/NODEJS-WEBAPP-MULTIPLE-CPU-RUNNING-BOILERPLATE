const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
module.exports = function (app) {
    app.use(compression());
    app.use(bodyParser.json({ limit: '2mb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: '2mb' }));
}