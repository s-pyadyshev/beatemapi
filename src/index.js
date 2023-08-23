const http = require("http");
const EventEmitter = require("events");
const PORT = 3000;
const Router = require("../framework/router");

const emitter = new EventEmitter();

const router = new Router();
router.get("/games", (request, response) => {
  response.end("request to /games");
});

const server = http.createServer();

server.listen(PORT);
