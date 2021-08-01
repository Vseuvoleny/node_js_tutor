const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  const exec = path.extname(filePath);
  let contentType = "text/html";
  switch (exec) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/js";
      break;
    default:
      break;
  }
  if (!exec) {
    filePath += ".html";
  }
  fs.readFile(filePath, (err, cont) => {
    if (err) {
      fs.readFile(path.join(__dirname, "public", "error.html"), (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Error");
        }
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        res.end(data);
      });
    } else {
      res.writeHead(200, {
        "Content-Type": contentType,
      });
      res.end(cont);
    }
  });

  //   if (req.url === "/") {
  //     fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
  //       if (err) {
  //         throw err;
  //       }
  //       res.writeHead(200, {
  //         "Content-Type": "text/html",
  //       });
  //       res.end(data);
  //     });
  //   }
  //   if (req.url === "/contact") {
  //     fs.readFile(path.join(__dirname, "public", "contact.html"), (err, data) => {
  //       if (err) {
  //         throw err;
  //       }
  //       res.writeHead(200, {
  //         "Content-Type": "text/html",
  //       });
  //       res.end(data);
  //     });
  //   }
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Server has been started...", PORT);
});
