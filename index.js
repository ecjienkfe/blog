//主文件
var server=require('./server')
var router=require('./router')
var rrr=require('./rrr')

rrr["/"]=rrr.wel

server.start(router.route,rrr)