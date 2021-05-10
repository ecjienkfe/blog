//监听服务器端口并作出响应
var http=require('http')
var url=require('url')

function strat(route,rrr){
    function onRequest(request,response){
        var pathname=url.parse(request.url).pathname
        route
    }
http.createServer(onRquest).listen(8888)
}