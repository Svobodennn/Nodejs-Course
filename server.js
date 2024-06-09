import http from 'http';
// const PORT = 5000;
const PORT = process.env.PORT;

const server = http.createServer((req,res) =>{
    // res.setHeader('Content-Type', 'text/html');
    res.writeHead(200,{'Content-Type': 'text/html'})

    // res.statusCode = 404;
    res.write('<h1>Hello World!</h1>');
    // res.end();

    console.log(req.url)
    console.log(req.method)

    // res.writeHead(500,{'Content-Type': 'application/json'})
    // res.end(JSON.stringify({ message: 'Server Error'}));
});


server.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
});