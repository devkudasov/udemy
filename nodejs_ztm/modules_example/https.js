const { send, read } = require("./internals");

function request(url, data) {
  send(url, data);
  return read();
}

const responseData = request("https://google.com", "hello");
console.log(responseData);
