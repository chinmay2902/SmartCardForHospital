const mongoose=require("mongoose");

const hospitalSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    telphone:{
        type:Number,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model("Hospital",hospitalSchema);