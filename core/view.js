const nunjucks=require('nunjucks');
module.exports = function (app) {
    nunjucks.configure('web_templates', {
        autoescape: true,
        express: app
    });
}