module.exports = class Router {
  constructor() {
    this.endpoints = {};
  }

  request(method = "GET", path, handler) {
    if (!this.endpoints[path]) {
      this.endpoints[path] = {};
    }
    // /games [GET, POST, PUT, DELETE]
    const endpoint = this.endpoints[path];

    if (endpoint[path]) {
      throw new Error(`[${method} on ${path} already exists]`);
    }

    endpoint[method] = handler;
    // emitter.on(`[${path}]:[${method}]`, (request, response) => {
    //   handler(request, response);
    // });
  }

  get(path, handler) {
    this.request("GET", path, handler);
  }

  post(path, handler) {
    this.request("POST", path, handler);
  }

  put(path, handler) {
    this.request("PUT", path, handler);
  }

  delete(path, handler) {
    this.request("DELETE", path, handler);
  }
};
