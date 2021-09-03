const express = require("express");
const fs = require("fs");
const app = express();
const jsonParser = express.json();
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + "/public"));
const filePath = "data/users.json";

app.get("/api/users", (req, res) => {
  const content = fs.readFileSync(filePath, "utf-8");
  const users = JSON.parse(content);
  res.send(users);
});

app.get('/api/users/:id' , (req , res)=>{

   const id = req.params.id;
   const content = fs.readFileSync(filePath, "utf-8");
   const users = JSON.parse(content);
   let user = undefined;
   for (let i = 0; i < users.length; i++) {
       if (users)
       
   }

})

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
