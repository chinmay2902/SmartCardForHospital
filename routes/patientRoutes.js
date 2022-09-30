const express=require("express");
const patientController=require("../controller/patientController")

const routes=express.Router();

// routes.get("/add",(req,res)=>{
//     const patient=new Patient({
//         name:"Rajat",
//         phone:8529193755,
//         alternativePhone:8529193755,
//         address:"MG Road",
//         city:"Aurangabad",
//         pincode:431001
//     })
//     patient.save().then((result)=>{
//         res.send(result);
//     }).catch(err=>console.log(err))
// })


routes.get("/:id",patientController.patientDetails);
routes.get("/:id/allVisit",patientController.patientAllVisit);
routes.get("/:id/lastVisit",patientController.patientLastVisit);


module.exports=routes;
