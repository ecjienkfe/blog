//路径对应事件

function start(response,postData){
    response.writeHead(200,{'Content-Type':'text/html'})
    response.write('hello start')
    response.end()
}

exports.start=start