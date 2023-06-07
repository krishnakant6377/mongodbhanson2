
const {insertDb}=require("../config/db")

const insertemployeeDb=async (req,res)=>{
// console.log(req.body)

const details=req.body
   try{ const result=await insertDb(details)
    console.log(result)
    res.send(result)}
    catch(err){
        console.log(err)
    }
}
module.exports={insertemployeeDb}