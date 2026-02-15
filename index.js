import express from "express"

const app = express()

console.warn("hii there")
app.get("/heath",(req,res)=>{
    res.status(200).json({sucess:true,message:"server is healthy"})
})




app.listen(3000,()=>{
    console.log("Server is running")
})