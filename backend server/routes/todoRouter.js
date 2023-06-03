const express = require("express");
const route = express.Router();

route.get("/",(req,res)=>{
    res.send("Get All Todo Data")
})
route.get("/:id",(req,res)=>{
    res.send("Get Single Todo Data")
})
route.post("/",(req,res)=>{
    res.send("Post Single Todo Data")
})
route.put("/:id",(req,res)=>{
    res.send("Edit Todo Data")
})
route.delete("/:id",(req,res)=>{
    res.send("Delete Todo Data")
})

module.exports = route;