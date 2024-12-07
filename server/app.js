const userrouter = require("./routes/userRouter.js");
const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const cors = require("cors");
const connectdb = require("./db/connection.js");
const database = "mongodb+srv://souravkumarjoarder:souravkumarjoarder@cluster0.qk48t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const database = process.env.database || "mongodb+srv://azy6049:as1816444@cluster0.hxfuyyu.mongodb.net/?retryWrites=true&w=majority";
app.use(cors())
app.use(bodyParser.json());
app.use(express.json());
require("./Models/usertable.js");
connectdb(database)
app.use("/api/user", userrouter);
app.listen(port, () => {
  console.log(`server is runing at ${port}`);
});