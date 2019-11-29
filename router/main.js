module.exports = function(app)
{

    app.get('/',function(req,res){
        res.render('main.html');
    });

    app.get('/intro',function(req,res){
        res.render('intro.html');
    });

    app.get('/test',function(req,res){
        res.send('<h1>Hello World</h1>');
    });

}
