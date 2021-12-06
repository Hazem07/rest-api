// *******require du server**
const express=require ("express");
const connectDB = require("./config/connectDB");
// *******instance methodes of all express methodes***********
const app=express();
require('dotenv').config();
connectDB();
app.use(express.json());
app.use("/x", require("./router/Person"));
// *******port**********
// const PORT=process.env.PORT;
const PORT= 5000;
// ********create server*******
app.listen(PORT, (error)=>
error? console.log(error): console.log("seerver is runing",PORT ) );
