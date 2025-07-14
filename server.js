import http from 'http';

const server = http.createServer((req, res) => {

    if (req.url === '/abc') {
        res.end(" <h1>hello dilip how are you what about you that is good man</h1> ");
    }else if(req.url === '/home'){
            res.end(" <h1> this is home page in node js </h1> ");
    }else{
        res.end("invalid url ");
    }


})



const port = 3000;
server.listen(port, () =>
    console.log("the server is runing in // localHost port "));