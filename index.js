const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res)=>{
    res.render("/service-worker/index.html")
})

server.listen(2026, ()=>{
    console.log("server runing...");
})

