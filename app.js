const express=require("express");
const mongoose =require("mongoose");
const morgan = require("morgan");
const { urlencoded } = require("express");

const doctorRoutes=require("./routes/doctorRoutes")
const patientRoutes=require("./routes/patientRoutes")

const app=express();

// Setting Up db connection
const dbURI="mongodb+srv://Admin:admin123@cluster0.lftqkaa.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dbURI).then(()=>{
    console.log("Connected To DB");
    app.listen(3000);
});

app.set("view engine","ejs");

// Middleware and static files
app.use(express.static("public"))
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}))

app.get("/:id",(req,res)=>{    
    res.render("index",{id:req.params.id})
})

// Doctor Routes
app.use("/doctor",doctorRoutes);

// Patient Routes
app.use("/patient",patientRoutes);

// Error Handling
app.use((req,res)=>{
    res.status(404).render("404")
})