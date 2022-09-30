const Patient=require("../models/patient")
const Visit=require("../models/visit")
const Doctor=require("../models/doctor")

const patientDetails=(req,res)=>{
    const id=req.params.id;
    Visit.findOne({patient:id}).sort({'_id':-1}).then((result)=>{
        console.log(result);
        res.render("doctor/patientDetails",{visit:result})
    }).catch(err=>{
        console.log(err);
        res.status(404).render("404")
    })
}

const addVisitRender=(req,res)=>{
    const id=req.params.id;
    res.render("doctor/addVisit",{id:id});
}

const addVisit=(req,res)=>{
    const visit=new Visit(req.body)

    visit.save().then((result)=>{
        res.render("doctor/addVisit",{id:req.body.patient});
    })
}

module.exports={
    patientDetails,
    addVisitRender,
    addVisit
}