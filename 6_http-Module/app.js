import http from "http";

// web Server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("You're on Root Page");
    res.end();
  }

  if (req.url === "/source") {
    res.write("You re on Source PAge");
    res.end();
  }

  if (req.url === "/contact") {
    res.setHeader("Content-type", "text/html");
    res.write("<h1>You re on Contact Page</h1>");
    res.end();
  }
});

server.listen(8080, () => {
  console.log("Server is Listening");
});
