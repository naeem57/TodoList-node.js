const express = require ("express");
const mongoose = require ("mongoose");
const todoRoute = require ("./routes/todo.js");

const app = express();
const PORT = 4001;

//MongoDb connnection
mongoose.connect("mongodb://127.0.0.1:27017/Todo-app")
.then(() => console.log("MongoDb connected Successfully!"))
.catch((err) => console.log("MongoDb connection faild!", err));

// body-parser middleware
app.use(express.json());

//use todo routes
app.use("/todo", todoRoute);


app.listen(PORT, () => console.log(`Sever started at Port ${PORT}`));