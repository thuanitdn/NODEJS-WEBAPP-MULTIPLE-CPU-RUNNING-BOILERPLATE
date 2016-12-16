const config = require('./../config/cors');
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", config.cors.origin);
        res.header('Access-Control-Allow-Methods', config.cors.methods);
        res.header("Access-Control-Allow-Headers", config.cors.headers);
        next();
    });
}