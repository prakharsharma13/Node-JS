const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res) => {
    const log = `${Date.now()}: New req recieved\n`
    fs.appendFile('log.txt', log, (err,data)=>{
        res.end("Hello from server")

    })
});

myServer.listen(5000, () => console.log("Server is running"))

