const http=require('http');
function dataControl(req,res){
    res.write('hello aravind how are you');
    res.end();
}
http.createServer(dataControl).listen(3000);

