const express = require("express");
const fs = require("fs");
const app = express();

// app.use((req, res, nx) => {
//   res.sendFile(`${__dirname}/public/index.html`);
// });
app.use("/home/foo/bar", (request, response) => {
  response.sendStatus(404).send("Not found");
});

app.get("/", (req, res) => {});
app.listen(8000);
