const http = require('http');
const {readFileSync} = require('fs');

const homePage = readFileSync("./navbar-app/index.html");
const browserApp = readFileSync("./navbar-app/browser-app.js");
const logo = readFileSync("./navbar-app/logo.svg");
const styles = readFileSync("./navbar-app/styles.css");

const server = http.createServer((req,res)=>{
    const url = req.url;
    console.log(url)
    if (url==='/'){
        res.writeHead(200,{"content-type":"text/html"});
        res.write(homePage);
        res.end()
    }
    else if (url==='/logo.svg'){
        res.writeHead(200,{"content-type":"image/svg+xml"});
        res.write(logo)
        res.end()
    }
    else if (url==='/browser-app.js'){
        res.writeHead(200,{"content-type":"text/javascript"});
        res.write(browserApp)
        res.end()
    }
    else if (url==='/styles.css'){
        res.writeHead(200,{"content-type":"text/css"});
        res.write(styles)
        res.end()
    }
    else{
    res.end("Invalid Url")
    console.log('Server Reached')
    }   
})

server.listen(5000);