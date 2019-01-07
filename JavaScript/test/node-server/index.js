var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')

var server = http.createServer(function(req,res){
    var pathObj = url.parse(req.url,true)
    var direct = path.join(__dirname,'sample')
    var filePath = path.resolve(direct,pathObj.pathname)
    
    fs.readFile(filePath,'binary',function(err,fileContent){
        if(err){
            console.log('404')
            res.writeHead(404,'not found')
            res.end('<h1>404 Not  Found</h1>')
        }else{
            console.log('ok')
            res.writeHead(200,'ok')
            res.write(fileContent,'binary')
            res.end()
        }
    })
})
server.listen(9000)