var  http=require('http');
http.createServer(function (requeset,response) {

   response.writeHead(200, { "Content-Type": "text/plain" });

    response.end('hello world');
    
}).listen(3000);
console.log("服务器已启动");