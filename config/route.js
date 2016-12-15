module.exports=function(app,modules){
    app.get('/',modules.Home.HomeController.actionIndex)
}