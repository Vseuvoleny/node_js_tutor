const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use("/contacts", (req, res) => {
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
app.listen(8000);
