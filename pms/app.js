const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())

const userRoutes = require('./routes/UserRoutes')
const employeeRoutes = require('./routes/EmployeeRoutes')
const productRoutes = require('./routes/ProductRoutes')
const categoryRoutes = require('./routes/CategoryRoutes')
const roleRoutes = require('./routes/RoleRoutes')
app.use('/user',userRoutes)
app.use('/employee',employeeRoutes)
app.use('/product',productRoutes)
app.use('/category',categoryRoutes)
app.use('/role',roleRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/pms_node",{},(err)=>{
    if(err){
        console.log("404-Database not connected...!")
    }
    else{
        console.log("Succsecfuly connected to DataBase..!")
    }  
})

const PORT = 3000
app.listen(PORT,()=>{
    console.log("Server is running on port => ",PORT)
})