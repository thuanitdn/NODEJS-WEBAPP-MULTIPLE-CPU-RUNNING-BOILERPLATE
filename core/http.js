const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
        res.header("Access-Control-Allow-Headers", "x-access-token, Content-Type");
        next();
    });
    app.use(compression());
    app.use(bodyParser.json({ limit: '2mb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: '2mb' }));
}