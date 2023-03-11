const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000
const userSchema = require('./user')
const EmployeeSchema = require('./schema/EmployeeSchema')
// const username = require('./user')
var testEmp = require('./employee')
console.log(testEmp)

// var data = require('./user')
// var x = testEmp()
// console.log(x)

var employee = require('./employee')
console.log(employee)
var x = employee.testEmp()
console.log(x)
var y = employee.testEmp2()
console.log(y)

var user = {
    name:"Darshan",
    email:"Darshan@gmail.com",
    age:19
}
var employee=[
    {
        id:101,
        name:"Darshan",
        salary:25000
    },
    {
        id:102,
        name:"Darsh",
        salary:25600
    }
]

app.get('/demo',(req,res)=>{
    return res.send(data.username+data.email)
})

app.get("/employee",(req,res)=>{

    res.status(200).json({
        message:"Success",
        data:employee
    })
})

app.get('/user',(req,res)=>{
    res.status(200).json({
        data:user,
        message:"user data"
    })
})

app.get('/test1',function (req, res) {

        // res.send("test....")

        res.status(201).json({
            message: "test1"
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
    console.log('server started on port...',PORT)
})