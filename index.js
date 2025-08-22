let http = require("http");

const user=require('./data');
http.createServer(function (req, res) {
    res.setHeader("Content-type","application/json");
    res.write(JSON.stringify(user));
    res.end();
})
.listen(8070);

