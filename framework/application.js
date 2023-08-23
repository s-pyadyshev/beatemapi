const http = require("http");
const EventEmitter = require("events");

module.exports = class Application {
  constructor() {
    this.emitter = new EventEmitter();
    this.server = this._createServer();
  }

  _createServer() {
    return http.createServer((request, response) => {
      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      const emitted = this.emitter.emit(
        this._getRouteMask(request.url, response.method),
        request,
        response
      );
      if (!emitted) {
        response.end();
      }
    });
  }

  _getRouteMask(path, method) {
    return `[${path}]:[${method}]`;
  }
};
