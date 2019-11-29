
var express = require('express');
var app = express();
var router = require('./router/main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

app.use(express.static('public'));

// 404 처리
app.use((req, res, next) => { 
    res.status(404).send('<h1>404 ERROR</h1> Check the URL path ');
});

// 500 처리
app.use((err, req, res, next) => { 
    console.error(err.stack);
    res.status(500).send('<h1>500 ERROR</h1>'); 
});


//// None Router version ///
//
// var express = require('express');
// var app = express();
// var server = app.listen(3000, function(){
//     console.log("Express server has started on port 3000")
// })

// app.get('/', function(req, res){
//     res.send('Hello World');
// });
//
//// None Router version ///


//// None Express Version ////
//
// var http = require('http');
// var fs = require('fs');
// var app = http.createServer(function(request,response){
//     var url = request.url;
//     if(request.url == '/'){
//       url = '/index.html';
//     }
//     if(request.url == '/favicon.ico'){
//         response.writeHead(404);
//         response.end();
//         return;
//     }
//     response.writeHead(200);

//     console.log(__dirname);
//     console.log(url);

//     // 사용자에게 전송할 데이터 생성 (텍스트, 파일 등..)
//     response.end(fs.readFileSync(__dirname + url));
 
// });
// app.listen(3000);
//
//// None Express Version ////