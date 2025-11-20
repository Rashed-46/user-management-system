const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());
// Define the port
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("this is server side users management system");
});
const users = [
  {
    id: 1,
    name: "Tanjina",
    email: "tanjina@gmail.com",
    age: 24,
  },
  {
    id: 2,
    name: "Rashed",
    email: "rashed@gmail.com",
    age: 25,
  },
  {
    id: 3,
    name: "kausir",
    email: "kausir@gmail.com",
    age: 20,
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});
app.post("/users", (req, res) => {
  console.log("users post methos");
  const newUsers = req.body;
  newUsers.id = users.length + 1;
  //   add to data in database
  users.push(newUsers);
  res.send(newUsers);
});

app.listen(port, (req, res) => {
  console.log(`server running on port ${port}`);
});
