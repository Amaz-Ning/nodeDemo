const http = require('http');
http.createServer((req, res) => {
    res.end(req);
}).listen(9000)