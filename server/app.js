const userrouter = require("./routes/userRouter.js");
const categoryrouter = require("./routes/categoryRouter.js")
const attributerouter = require("./routes/attributeRouter.js")
const productrouter = require("./routes/productRouter.js")
const variantrouter = require("./routes/variantRouter.js")
const wishlistrouter = require("./routes/wishlistRouter.js")
const cartrouter = require("./routes/cartRouter.js")
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
require("./Models/category");
require("./Models/attribute");
require("./Models/product");
require("./Models/product_variant");
require("./Models/wishlist");
require("./Models/cart");

connectdb(database)
app.use("/api/user", userrouter);
app.use("/api/category", categoryrouter);
app.use("/api/attribute", attributerouter);
app.use("/api/product",productrouter);
app.use("/api/variant", variantrouter);
app.use("/api/wishlist", wishlistrouter);
app.use("/api/cart", cartrouter);
app.listen(port, () => {
  console.log(`server is runing at ${port}`);
});