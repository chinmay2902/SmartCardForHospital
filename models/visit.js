const mongoose=require("mongoose");
const Schema= mongoose.Schema();

const visitSchema=new mongoose.Schema({

    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Patient"
    },
    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Doctor"
    },
    reason:{
        type:String,
        required:true
    },
    diagnostic:{
        type:String,
        required:true
    },
    prescription:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model("Visit",visitSchema);