const express = require("express");
const mangoose = require("mongoose");
const StudentRouter = require("./routes/studentRouter");
const InstituteRouter = require("./routes/instituteRouter")
const TeacherRouter = require("./routes/teacherRouter");
const CourseRouter = require("./routes/courseRouter");
const UserRouter = require("./routes/userRouter")
var cors = require('cors');
require("dotenv").config();

const app = express();
app.use(express.json())
app.use(cors());

app.use("/api/student", StudentRouter);
app.use("/api/institute",InstituteRouter);
app.use("/api/teacher",TeacherRouter);
app.use("/api/course",CourseRouter);
app.use("/api/user", UserRouter);

mangoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Database Connected Successfully and Server is Listening on this port 5000"
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });


// const express = require("express");

// const app = express();

// let cource = [
//   {
//     id: 1,
//     cources: "ABC",
//   },
//   {
//     id: 2,
//     cources: "ABC",
//   },
//   {
//     id: 3,
//     cources: "ABC",
//   },
//   {
//     id: 4,
//     cources: "ABC",
//   }
// ];

// app.get('/cources',(req,res)=>{
//     res.json(cource);
// });
// app.get('/cources/:id',(req,res)=>{
//     let id = req.params.id

//     let obj = cource.find((x)=> x.id == id);
//     if(obj){
//         res.send(obj).status(200);
//     }else{
//         res.send("No Data Found").status(404);
//     }
// });
// app.post('/cources',(req,res)=>{});
// app.put('/cources/:id',(req,res)=>{});
// app.delete('/cources/:id',(req,res)=>{});

// app.listen(5000);

//  npm i -g nodemon
// thunder client
// postman

// const fs = require("fs");

// fs.readdir("./",(err,dir)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(dir);
//     }

// });

// fs.readFile("./abc.txt","utf-8",(err,file)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(file);
//     }
// });

// fs.writeFile("./abc.txt", "ABH-00001",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file Written successfully");
//     }
// });

// fs.appendFile("./abc.txt", "New Text From Server.js",(err)=>{
//     if(!err){
//         console.log("Done");
//     }
// })

// const http = require("http");

// let cources = [
//     {
//         id:1,
//         cources:"ABC",
//     },
//     {
//         id:2,
//         cources:"ABC",
//     },
//     {
//         id:3,
//         cources:"ABC",
//     },
//     {
//         id:4,
//         cources:"ABC",
//     }
// ]

// const server = http.createServer((req,res)=>{
//     if(req.url == "/cources"){
//         if(req.method == "GET"){
//         res.write(JSON.stringify(cources));
//     }
//     if(req.method == "POST"){
//         req.body
//         res.write(JSON.stringify(cources));
//     }
//     res.end();
// }
// if(req.url == "/users"){
//     res.write("/Users Route is Working");
//     res.end();
// }
// })
// server.listen(5000);
