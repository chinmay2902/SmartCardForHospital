const Patient=require("../models/patient")
const Visit=require("../models/visit")
const Doctor=require("../models/doctor")

const checkDoctorRender=(req,res)=>{
    res.render("doctor/checkDoctor.ejs",{id:req.params.id})
}

const checkDoctor=async (req,res)=>{
    const doctor=await Doctor.findOne({doctorCode:req.body.doctorCode})
    if(doctor.doctorPass==req.body.doctorPass){
        res.redirect("/doctor/"+req.params.id+"/details")
    }else{
        res.send("Not Auth")
    }
}

const patientDetails=async (req,res)=>{
    const id=req.params.id;
    try{
        const visit=await Visit.findOne({patient:id}).sort({'_id':-1});
        const patient=await Patient.findById(id);
        const doctor=await Doctor.findById(visit.doctor)
        res.render("doctor/patientDetails",{visit:visit,patient:patient,doctor:doctor})
    }catch(err){
        console.log(err);
        res.status(404).render("404");
    }
}

const addVisitRender=(req,res)=>{
    const id=req.params.id;
    res.render("doctor/addVisit",{id:id});
}

const addVisit=(req,res)=>{
    const visit=new Visit(req.body)

    visit.save().then((result)=>{
        res.redirect("/doctor/"+req.params.id+"/details");
    })
}



module.exports={
    checkDoctorRender,
    checkDoctor,
    patientDetails,
    addVisitRender,
    addVisit,

}