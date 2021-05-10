//监听服务器端口并作出响应
var http=require("http")
var url=require("url")

function start(route,rrr){
    function onRequest(request,response){
        var pathname=url.parse(request.url).pathname
        var postData="77777"
        route(rrr,pathname,response,request)
    }
http.createServer(onRequest).listen(8888)
}

exports.start=start