const express=require("express")
const Doctor=require("../models/doctor");
const Hospital=require("../models/hospital");
const Visit=require("../models/visit")
const doctorController=require("../controller/doctorController")
const routes=express.Router();

routes.get("/",doctorController.doctorTT)

// routes.get("/add",(req,res)=>{
//     const hospital=new Hospital({
//         name:"Indus",
//         address:"MG Road",
//         city:"Aurangabad",
//         telphone:"0240225890",
//         pincode:431001
//     })
//     hospital.save().then((result)=>{
//         res.send(result);
//     }).catch(err=>console.log(err))
// })

// routes.get("/add",(req,res)=>{
//     const doctor=new Doctor({
//         name:"Dr Vasu",
//         degree:"MD MBBS",
//         phone:8529193755,
//         telphone:"024058455",
//         hospital:"63372c0f893a9f262fba411e"
//     })
//     doctor.save().then((result)=>{
//         res.send(result);
//     }).catch(err=>console.log(err))
// })

// routes.get("/add",(req,res)=>{
//     const visit=new Visit({
//         patient:"633731b05170aade54f92d47",
//         doctor:"63372f95bbb83e1b55591e5b",
//         diagnostic:"Skin Burn",
//         prescription:"Zinc Cold[3 Days 2times]"
//     })
//     visit.save().then((result)=>{
//         res.send(result);
//     }).catch(err=>console.log(err))
// })

module.exports=routes;