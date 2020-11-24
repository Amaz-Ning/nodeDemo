const http = require('http');
const createHandler = require('coding-webhook-handler');
const handler = createHandler({
    path: '/',
    token: '1993'
});
http.createServer((req, res) => {
    handler(req, res, () => {

    })
    res.end('webhook');
}).listen(9000)

const rumCommand = (cmd, args, callback) => {
    const child = spawn(cmd, args)
    let response = ''
    child.stdout.on('data', buffer => response += buffer.toString())
    child.stdout.on('end', () => callback(response))
}
handler.on('push', event => {
    rumCommand('sh', ['./sh/build.sh'], txt => {
        console.log(txt);
    })
});