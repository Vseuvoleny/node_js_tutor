const http = require("http");
const fs = require("fs");
http
  .createServer(function (request, response) {
    console.log(`Запрошенный адрес: ${request.url}`);

    fs.readFile("index.html", "utf8", (err, data) => {
      let message = "Learning Node.Js";
      let header = "Node.js";
      // если произошла ошибка - отправляем статусный код 404
      if (err) {
        response.statusCode = 404;
        response.end("Resourse not found!");
      } else {
        data = data.replace("{header}", header).replace("{message}", message);
        response.end(data);
      }
    });
  })
  .listen(3000, () => {
    console.log("Server started at 3000");
  });
