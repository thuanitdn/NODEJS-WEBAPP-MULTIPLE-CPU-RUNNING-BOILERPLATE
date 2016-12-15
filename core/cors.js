module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
        res.header("Access-Control-Allow-Headers", "x-access-token, Content-Type");
        next();
    });
}