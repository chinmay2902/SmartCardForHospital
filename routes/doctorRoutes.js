const express=require("express")
const Doctor=require("../models/doctor");
const Hospital=require("../models/hospital");
const Visit=require("../models/visit")
const doctorController=require("../controller/doctorController")
const routes=express.Router();

routes.get("/:id",doctorController.patientDetails);
routes.get("/:id/addVisit",doctorController.addVisitRender);
routes.post("/:id/addVisit",doctorController.addVisit)

module.exports=routes;