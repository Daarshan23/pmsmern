const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    },
    role:{
        type:Schema.Types.ObjectId,
        ref:'role'
        
    }
})

//model
// mongoose.model('employee',EmployeeSchema)

module.exports = mongoose.model('user',UserSchema)