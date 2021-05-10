//路径对应事件

function wel(response,postData){
    response.writeHead(200,{'Content-Type':'text/html'})
    response.write('hello start')
    response.end()
}

exports.wel=wel