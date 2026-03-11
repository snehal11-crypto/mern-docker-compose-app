const http = require("http");

http.createServer((req,res)=>{
    res.write("Backend running");
    res.end();
}).listen(5050`);

console.log("Server running on 5050");
