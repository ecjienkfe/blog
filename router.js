//路由


function route(rrr,pathname,response,postData){
    if(typeof rrr[pathname]==='function')
    {
        rrr[pathname](response,postData)
    }
    else
    {
        response.writeHead(404,{"Content-Type":"text/plain"})
        response.write("404 Not Found")
        response.end()
    }
}

exports.route=route