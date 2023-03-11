const employeeeSchema = require('../schema/EmployeeSchema')
const getEmployees = (req,res)=>{
    
        employeeeSchema.find((err,data)=>{
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
} 

const addEmployee = (req,res)=>{
    
    console.log("emp...",req.body)
    const employee = new employeeeSchema(req.body)
    employee.save((err,success)=>{
        if(err){
            res.status(500).json({
                massage:"Data not Saved...!"
            })
        }
        else{
            res.status(201).json({
                massage:"Data Saved...!",
                data:success
            })
        }
    })
}


const deletEmployee = (req,res)=>{
    
    const id = req.params.id
    employeeeSchema.findByIdAndDelete(id,(err,success)=>{
        if(err){
            res.status(404).json({
                massage:"Error in deleting employee...!"
            })
        }
        else{
           if(success!=null || success!=undefined){
                res.status(200).json({
                    massage:"Employee Deleted Successfully...!",
                    data:success
                })
            }
            else{
                res.status(404).json({
                    massage:"employee not found...!"
                })
            }
        }
    })
}

const getEmployeeById = (req,res)=>{
    const id = req.params.id
    employeeeSchema.findById(id,(err,employee)=>{
        if(err){
            res.status(404).json({
                massage:"Error in Fecting data...!"
            })
        }
        else{
           if(employee==null || employee==undefined){
                res.status(404).json({
                    massage:"employee not Found...!"
                })
            }
            else{
                res.status(200).json({
                    data:employee,
                    massage:"data fetched successfully....."
                })
            }
        }
    })
}


module.exports = {
    getEmployees,
    addEmployee,
    getEmployeeById,
    deletEmployee
}