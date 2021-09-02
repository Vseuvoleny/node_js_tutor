const express = require("express");
const app = express();

app.set("view engine", "pug");

app.use("/contact", (req, res) => {
  res.render("contacts", {
    title: "Мои контакты",
    emailsVisible: true,
    emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
    phone: "+1234567890",
  });
});

app.use("/", (req, res) => {
  res.send("Main page");
});

app.listen(8000, () =>
  console.log("> Server is up and running on port : " + 8000)
);
