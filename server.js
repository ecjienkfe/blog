//监听服务器端口并作出响应
var http=require("http")
var url=require("url")

function strat(){
    function onRequest(request,response){
        response.writeHead(200,{"Content-Type":"text/plain"})
        response.write("yujghjh")
        response.end()
    }
http.createServer(onRequest).listen(8888)
}
