import { readFile } from 'fs';
import { createServer } from 'http';
import { parse } from 'url';

createServer(function(req,res){
    const q = parse(req.url, true);
    const filename = "." + q.pathname;

    readFile(filename, function(err,data){
        if (err) {
            res.writeHead(404, {'Content-type': 'text/html'});
            return res.end("404 not found");
        }
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080);