const http = require("http");


const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    if (req.url === "/") {
        res.write("<h1>Welcome to the Homepage!</h1>");
    } else if (req.url === "/about") {
        res.write("<h1>About Us</h1><p>This is a simple Node.js server.</p>");
    } else {
        res.writeHead(404);
        res.write("<h1>404 - Page Not Found</h1>");
    }

    res.end(); 
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:5000");
});
