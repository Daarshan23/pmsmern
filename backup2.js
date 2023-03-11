const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000
const userSchema = require('./schema/UserSchema')
const EmployeeSchema = require('./schema/EmployeeSchema')

app.get('/user',(req,res)=>{
     userSchema.find((err,data)=>{
        if(err){
            res.status(404).json({
                massage:"Data not Found...!"
            })
        }
        else{
            res.status(200).json({
                data:data,
                massage:"data found....."
            })
        }
     })
})


mongoose.connect("mongodb://127.0.0.1:27017/pms_node",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(err){
        console.log("not connect to Database")
    }
    else{
        console.log("connected to DataBase....")
    }
})

app.listen(PORT,()=>{
    console.log("Server is running on port ",PORT)
})