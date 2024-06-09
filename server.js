import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
// const PORT = 5000;
const PORT = process.env.PORT;
// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

const server = http.createServer(async(req,res) =>{
    // res.setHeader('Content-Type', 'text/html');
    // res.writeHead(200,{'Content-Type': 'text/html'})
// 
    // res.statusCode = 404;
    // res.write('<h1>Hello World!</h1>');
    // res.end();
// 
    // console.log(req.url)
    // console.log(req.method)

    // res.writeHead(500,{'Content-Type': 'application/json'})
    // res.end(JSON.stringify({ message: 'Server Error'}));

    try {
        if(req.method === 'GET'){
            let filePath;
            if(req.url === '/'){
                filePath  = path.join(__dirname, 'public', 'index.html');
            }
            else if(req.url === '/about'){
                filePath  = path.join(__dirname, 'public', 'about.html');
        
            }
            else{
                throw new Error('Not found')
            }

            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end;
        }
        else {
            throw new Error('method not valid')
        }
    } catch (error) {
        res.writeHead(500,{'Content-Type': 'text/html'})
        res.write('server error');
    }
});


server.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
});