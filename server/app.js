const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./Employee')

app.use(bodyParser.json())
const Employee = mongoose.model("employee")
//password = ztP2aES83LZV5f3N
const mongoUri = "mongodb+srv://cnq:ztP2aES83LZV5f3N@cluster0.k2eer.mongodb.net/<employeeApp>?retryWrites=true&w=majority"
//mongodb+srv://cnq:<password>@cluster0.k2eer.mongodb.net/<dbname>?retryWrites=true&w=majority


mongoose.connection.on("connected",()=>{
    console.log("connected to mongo")
})
mongoose.connection.on("error",(err)=>{
    console.log("error",err)
})


app.get('/',(req,res)=>{
    Employee.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})


app.post('/send-data',(req,res)=>{
     const employee = new Employee({
         name:req.body.name,
         email:req.body.email,
         phone:req.body.phone,
         picture:req.body.picture,
         salary:req.body.salary,
         position:req.body.position

     })
     employee.save()
     .then(data=>{
         console.log(data)
         res.send(data)
     }).catch(err=>{
         console.log(err)
     })
     
})

app.post('/delete',(req,res)=>{
    Employee.findByIdAndRemove(req.body._id)
    .then(data=>{
        console.log(data)
        res.send(data)
    })
    .catch(err=>{
        console.log(err)
    })
})


app.post('/update',(req,res)=>{
    Employee.findByIdAndUpdate(req.body._id,{
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        picture:req.body.picture,
        salary:req.body.salary,
        position:req.body.position
    }).then(data=>{
        console.log(data)
        res.send(data)
    })
    .catch(err=>{
        console.log(err)
    })
})


app.listen(3000,()=>{
    console.log("server running")
})

mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// app.get('/',(req,res)=>{
//     Employee.find({}).then(data=>{
//         res.send(data)
//     }).catch(err=>{
//         console.log(err)
//     })
// })


// app.post('/update',(req,res)=>{
//     Employee.findByIdAndUpdate(req.body.id,{
//         name:req.body.name,
//         email:req.body.email,
//         phone:req.body.phone,
//         picture:req.body.picture,
//         salary:req.body.salary,
//         position:req.body.position
//     }).then(data=>{
//         console.log(data)
//         res.send(data)
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })

// app.listen(3000,()=>{
//     console.log("server running")
// })


// {
//     "_id":"5fbb1c91b333d7dbbad07202",
//     "name":"Fre",
//     "email":"fre@uo.com",
//     "phone":"21234",
//     "picture":"some url",
//     "salary":"300k",
//     "position":"manager"
//     }
    
// {
//     "name":"jisoo",
//     "email":"jisoo@uo.com",
//     "phone":"2122234",
//      "picture":"some url",
//     "salary":"500k",
//     "position":"developer"
    
//     }
    