//主文件
var server=require('./server')
var router=require('./router')
var rrr=require('./rrr')

rrr["/"]=rrr.start

server.start(router.route,rrr)