const express=require("express");
const app=express();
const mongodb=require("./db");
mongodb();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With,Content-Type,Accept"
    );
    next();
})

app.listen(5000,()=>{
    console.log("LISTENING AT PORT 5000");
})
app.use(express.json());
app.use('/api',require('./routes/createuser'));
app.use('/api',require('./routes/displaydata'));
app.get("/",(req,res)=>{
    res.send("hi");
})