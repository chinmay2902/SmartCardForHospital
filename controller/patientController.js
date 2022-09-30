const Patient=require("../models/patient")
const Visit=require("../models/visit")


const patientDetails=(req,res)=>{
    const id=req.params.id;
    Patient.findById(id).then((result)=>{
        res.render("patient/details",{patient:result})
    }).catch(err=>{
        res.status(404).render("404")
    })
}

const patientAllVisit=(req,res)=>{
    const id=req.params.id;
    Visit.find({patient:id}).then((result)=>{
        res.render("patient/allVisit",{visits:result})
    }).catch(err=>{
        res.status(404).render("404")
    })
}

const patientLastVisit=(req,res)=>{
    const id=req.params.id;
    Visit.findOne({patient:id}).sort({'_id':-1}).then((result)=>{
        console.log(result);
        res.render("patient/lastVisit",{visit:result})
    }).catch(err=>{
        console.log(err);
        res.status(404).render("404")
    })
}


module.exports={
    patientDetails,
    patientAllVisit,
    patientLastVisit,
}