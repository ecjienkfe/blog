//监听服务器端口并作出响应
var http=require("http")
var url=require("url")

function strat(route,rrr){
    function onRequest(request,response){
        var pathname=url.parse(request.url).pathname
        var postData="sfggggffg"
        route(rrr,pathname,response,postData)
    }
http.createServer(onRequest).listen(8888)
}

exports.start=start