const Patient=require("../models/patient")
const Visit=require("../models/visit")
const Doctor=require("../models/doctor")



const patientDetails=(req,res)=>{
    const id=req.params.id;
    Patient.findById(id).then((result)=>{
        console.log(typeof result)
        res.render("patient/details",{patient:result})
    }).catch(err=>{
        res.status(404).render("404")
    })
}

const patientAllVisit=(req,res)=>{
    const id=req.params.id;
    Visit.find({patient:id}).sort({"createdAt":-1}).then((result)=>{
        res.render("patient/allVisit",{visits:result})
    }).catch(err=>{
        res.status(404).render("404")
    })
}

const patientLastVisit=async(req,res)=>{
    try{
        const id=req.params.id;
        const visit=await Visit.findOne({patient:id}).sort({'_id':-1})
        const doctor=await Doctor.findOne({id:visit.doctor})

        res.render("patient/lastVisit",{visit:visit,doctor:doctor})
    }catch(err){
        console.log(err);
        res.status(404).render("404")
    }
}


module.exports={
    patientDetails,
    patientAllVisit,
    patientLastVisit,
}