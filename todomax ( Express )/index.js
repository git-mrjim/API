const express = require("express");
const cors = require("cors");
const database = require("./db/connect");
const user = require("./routes/user");
const task = require("./routes/task");
const todo = require("./routes/todo");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

database.Connect();

app.use("/user", user);
app.use("/task", task);
app.use("/todo", todo);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
