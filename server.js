require("dotenv").config();
const fs = require("fs");
const express = require("express");


const app = express();
const port = process.env.PORT;




/************************************* Server listening *************************/

app.listen(port,(err)=>{
    console.log(`I am listening at port number ${port}`);
})


