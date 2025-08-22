let http = require("http");
http
.createServer(function(req,res){
    res.setHeader("Content-TYPE","application/json");
    //console.log(req);
    if(req.url =="/"){
        res.write("HOME");

    } else  if((req.url="/login")){
        res.write("login");
    }
    res.end();
})
.listen(7000)

