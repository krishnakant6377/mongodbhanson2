const express=require("express")
const  route  = require("./route/route")
const app=express()
app.use(express.json())
app.use(route)
app.get ("/",(req,res)=>{
    res.send("Api is running fine")

})
app.listen(4001,()=>{
    console.log("working")
})