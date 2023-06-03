const express = require("express");
const route = express.Router();
const TeacherModel = require("../models/techerModel");
const {sendResponse} = require("../Helper/helper");

route.get("/", async(req, res) => {
  try{
    const Result = await TeacherModel.find();
    if(!Result){
        res.send(sendResponse(false,null,"No Data Found")).status(404);
    }
    else{
        res.send(sendResponse(true,Result,"Get Data Successfully")).status(200)
    }
}
catch(e){
    console.log(e);
    res.send(sendResponse(false)).status(400)
}
});

route.get("/:id", async(req, res) => {
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
});

route.post("/", async (req, res) => {
  let { name, cource, contact } = req.body;
  try {
    let ErrArr = [];
    if (!name) {
      ErrArr.push("Required : Name");
    }
    if (!cource) {
      ErrArr.push("Required : Cource");
    }
    if (!contact) {
      ErrArr.push("Required : Contact");
    }
    if (ErrArr.length > 0) {
      res
        .send(sendResponse(false, ErrArr, null, "Required : All Fields"))
        .status(400);
    } else {
      let obj = { name, cource, contact };
      let Teacher = new TeacherModel(obj);
      await Teacher.save();
      if (!Teacher) {
        res
          .send(sendResponse(false, null, "Internael Server Error"))
          .status(404);
      } else {
        res
          .send(sendResponse(true, Teacher, "Get Data Successfully"))
          .status(200);
      }
    }
  } catch (e) {
    res.send(sendResponse(false, null, "Internel Server Error")).status(404);
  }
});
route.put("/:id", (req, res) => {
  res.send("Edit Teacher Data");
});
route.delete("/:id", (req, res) => {
  res.send("Delete Data");
});

module.exports = route;
