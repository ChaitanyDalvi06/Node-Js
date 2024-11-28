const http = require('http')
const fs = require('fs')
const url = require('url')
let productString = fs.readFileSync('products.json', { encoding: 'utf-8' })

const server = http.createServer((req, res) => { // req is the request object and res is the response object
    // console.log(req.method)
    // console.log(req.url)

    const parsedUrl = url.parse(req.url, true) // true is used to give the query string as an object
    console.log(parsedUrl)

    // res.end('ye le'); // This will be printed on the browser
    if (parsedUrl.pathname === "/users" && req.method === "GET") {
        res.end('Users fetched')
    }
    else if (parsedUrl.pathname === "/users" && req.method === "POST") {
        res.end('User created')
    }
    else if (parsedUrl.pathname === "/products" && req.method === "GET" && parsedUrl.query.id === undefined) {
        res.writeHead(200,{"Content-Type":"application/json"})
        res.end(productString)
    }
    else if (parsedUrl.pathname === "/products" && req.method === "GET" && parsedUrl.query.id != null) {
        let id = parsedUrl.query.id

        let products = JSON.parse(productString)

        let product=products.find((product)=>{
            return product.id == Number(id);
        })

        res.writeHead(200,{"Content-Type":"application/json"})

        res.end(JSON.stringify(product))
    }
    else {
        res.end('404 Not Found')
    }
})

server.listen(8000, () => { // 8000 is the port number 
    console.log('Server up and running'); // This will be printed on the console when the server is started
})