const mongoose=require("mongoose")
const Schema=mongoose.Schema()

const patientSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    alternativePhone:{
        type:Number,
        required:true
    },
    allergy:{
        type:String,
    },
    diabetes:Boolean,
    bp:Boolean,
    thyroid:Boolean,
    surgery:String,
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    } 
});

module.exports=mongoose.model("Patient",patientSchema);