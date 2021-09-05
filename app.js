const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});
app.get("/error", (req, res) => {
  res.sendStatus(404).send("Not Found");
});
app.get("/user", (req, res) => {
  res.send({ name: "Tom", age: 12 });
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
module.exports.app = app;
