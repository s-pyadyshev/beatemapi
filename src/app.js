const http = require("http");
const PORT = 3500;
const fs = require("fs");

http
  .createServer((req, res) => {
    const url = req.url;

    switch (url) {
      case "/":
        console.log("main page");
        res.write("<h1>Main</h1>");
        break;
      case "/contact":
        console.log("contact page");
        res.write("<h1>Contact</h1>");
        break;
      default:
        res.write("<h1>404</h1>");
        break;
    }

    res.end();
  })
  .listen(PORT);
