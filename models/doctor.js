const mongoose=require("mongoose");
const Schema=mongoose.Schema();

const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    doctorCode:{
        type:String,
        required:true
    },
    doctorPass:{
        type:String,
        required:true
    },
    degree:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    telphone:{
        type:Number
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
      }
})

module.exports=mongoose.model("Doctor",doctorSchema);