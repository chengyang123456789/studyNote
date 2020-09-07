const http = require('http')

http.createServer(function(req,res){
    var contentType = req.getHeader('Content-Type');
    console.log(contentType);
    res.setHeader('Content-Type','text/html');
    res.setHeader('a','bar');
    res.setHeader('Set-Cookie',['foo=bar','bar=baz']);
    res.setStatusCode = 404;
    res.statusMessage = 'not found';
    res.writeHead(200,'Not Found',{'Content-Type':'text/plain'})
    res.end('<h1>hello world</h1>')
}).listen(8080)