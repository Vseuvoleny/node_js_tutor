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
       if (users[i].id == id){
         user=users[i];
         break;
       }
   }
   if (user){
     res.send(user);
   } else {
     res.status(400).send()
   }
})

app.post('/api/users',jsonParser,(req,res)=> {
  if (!req.body) return res.status(400).send()
  const userName = req.body.name;
  const userAge = req.body.age;
  let user = {name: userName, age:userAge};
  let data = fs.readFileSync(filePath,'utf8');
  let users = JSON.parse(data);
  const id = Math.max.apply(Math,users.map(i=>i.id));
  user.id = id+1;
  users.push(user);
  data = JSON.stringify(users);
  fs.writeFileSync('data/users.json',data);
  res.send(user)
})

app.delete('/api/users/:id',(req,res)=>{
  const id = req.params.id;
  let data = fs.readFileSync(filePath,'utf8');
  let users = JSON.parse(data);
  let index = -1;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == id){
      index = i;
      break
    }
  }
  if (index >-1){
    const user = users.splice(index,1)[0];
    data = JSON.stringify(users);
    fs.writeFileSync('data/users.json',data);
    res.send(user)
  } else{
    res.sendStatus(404);
  }
})


app.put('/api/users',jsonParser,(req,res)=>{
    if (!req.body) return res.sendStatus(400);
    const userId = req.body.id;
    const userName = req.body.name;
    const userAge = req.body.age;
    let data = fs.readFileSync(filePath,'utf8');
    console.log(data);
    const users= JSON.parse(data);
    let user = undefined;
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == userId){
        user = users[i];
        break;
      }
      
    }
    if (user){
      user.age = userAge;
      user.name = userName;
      data = JSON.stringify(users)
      fs.writeFileSync('data/users.json',data);
      res.send(users)
    } else{
      res.sendStatus(404);
    }
})

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
