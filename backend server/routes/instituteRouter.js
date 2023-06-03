const express = require("express");
const route = express.Router();
const {sendResponse} = require("../Helper/helper")
const InstituteModel = require("../models/instituteModel")

route.get("/",async(req,res)=>{
    try{
        const Respons = await InstituteModel.find();
        if(!Respons){
            res.send(sendResponse(false,null,"No Data Found")).status(404);
        }
        else{
            res.send(sendResponse(true,Respons,"Get Data Successfully")).status(200)
        }
    }
    catch(e){
        console.log(e);
        res.send(sendResponse(false)).status(400)
    }
})

route.get("/:id", async(req,res)=>{
    try{
        let id = req.params.id;
        let result = await StudentModel.findById(id);
        if(!result){
          res.send(sendResponse(false,null,"No Data On This ID")).status(400)
        }
        else{
          res.send(sendResponse(false,result,"Delete Id Successfully")).status(200)
        }
      }
      catch(e){
        res.send(sendResponse(false,null,"Error")).status(404)
      }
})

route.post("/",async(req,res)=>{
    const {name,address,shortName,tel} = req.body
    try{
        let ErrorArr = [];
        if(!name){ErrorArr.push("Required : Name")}
        if(!address){ErrorArr.push("Required : Adress")}
        if(!tel){ErrorArr.push("Required : Tel")}
        if(ErrorArr.length > 0){
            res.send(sendResponse(false,ErrorArr,null,"Required All Fields")).status(400)
        }
        else{
            let obj = {name,address,shortName,tel}
            let data = new InstituteModel(obj)
            await data.save()
            if(!data){
                res.send(sendResponse(false,null,"Internael Server Error")).status(404);
            }
            else{
                res.send(sendResponse(true,data,"Get Data Successfully")).status(200);
            }

        }
    }
    catch(e){
        res.send(sendResponse(false,null,"Internel Server Error")).status(404);
    }
})

route.put("/:id",(req,res)=>{
    res.send("Edit Institute Data")
})
route.delete("/:id",(req,res)=>{
    res.send("Delete Data")
})

module.exports = route;