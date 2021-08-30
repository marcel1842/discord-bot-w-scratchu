const express = require('express');
const server = express();

server.all('/', (req, res)=>{
    res.send('https://www.youtube.com/c/mario1842/featured')
})
function keepAlive(){
    server.listen(3000, ()=>{console.log("Server is Ready!")});
}
module.exports = keepAlive;
