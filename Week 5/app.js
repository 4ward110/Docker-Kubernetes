const http  = require("http")
const port = 3000

const server = http.createServer(function(req,res){
    res.write("hello world")
    res.end()
})

server.listen(port, function(error) {
    if (error) {
        console.log("something went wrong", error)
    }
    else {
        console.log('Server is running on port '+ port)
    }
})
