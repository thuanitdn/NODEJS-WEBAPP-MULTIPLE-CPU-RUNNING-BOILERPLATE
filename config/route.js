module.exports=function(app,Module){
    app.get('/',Module.Home.HomeController.ActionIndex)
}