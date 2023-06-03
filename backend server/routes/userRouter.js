const express = require("express");
const route = express.Router();
const { sendResponse } = require("../Helper/helper");
const UserModel = require("../models/userModel");

route.get("/", async (req, res) => {
  try {
    const Response = await UserModel.find();
    if (!Response) {
      res.send(sendResponse(false, null, "No Data Found")).status(404);
    } else {
      res
        .send(sendResponse(true, Response, "Get Data Successfully"))
        .status(200);
    }
  } catch (error) {
    res.send(sendResponse(false)).status(400);
  }
});

route.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let Result = await UserModel.findById(id);
    if (!Result) {
      res.send(sendResponse(false, null, "No Data On This ID")).status(400);
    } else {
      res.send(sendResponse(true, Result, "Get ID Successfully")).status(200);
    }
  } catch (e) {
    res.send(sendResponse(false)).status(404);
  }
});

route.post("/", async (req, res) => {
  const { id, name, email } = req.body;
  try {
    let errArrey = [];
    if (!name) {
      errArrey.push("Required : Name");
    }
    if (!email) {
      errArrey.push("Required : Email");
    }
    if (errArrey.length > 0) {
      res
        .send(sendResponse(false, errArrey, null, "Required All Fields"))
        .status(400);
      return;
    } else {
      let Obj = { id, name, email };
      let User = new UserModel(Obj);
      await User.save();
      if (!User) {
        res
          .send(sendResponse(false, null, "Internal Server Error"))
          .status(400);
      } else {
        res
          .send(sendResponse(true, User, "Data Save SuccessFully"))
          .status(200);
      }
    }
  } catch (e) {
    res.send(sendResponse(false, null, "Internal Seever ERROR")).status(404);
  }
});

route.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const Result = await UserModel.findById(id);
    if (!Result) {
      res.send(sendResponse(false, null, "No Data Found")).status(400);
    } else {
      let Updated = await UserModel.findByIdAndUpdate(id,req.body, {
        new: true,
      });
      if (!Updated) {
        res.send(sendResponse(false, null, "Error")).status(404);
      } else {
        res
          .send(sendResponse(true, Updated, "Updated Successfully"))
          .status(200);
      }
    }
  } catch (e) {
    res.send(sendResponse(false)).status(400);
  }
});
route.delete("/:id", async(req, res) => {
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
module.exports = route;