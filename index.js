const express=require("express")
const cors=require('cors')


const app=express();


app.use(cors());

const middleware=(req,res,next)=>{
    console.log("I am in the middleware 1.")
    console.log("I got the first request")
    next();
}
const middleware2=(req,res,next)=>{
    console.log(req+"I am in the middleware 2")
    next()
}

app.get("/",middleware,(req,res)=>{
    console.log("Received the login request")
    res.send('middleware1')
});

app.get("/second",middleware2,(req,res)=>{
    console.log("Second middleware request received")
    res.send("<h2 style='color:blue','background-color:yellow'>middleware2</h2>")
})

app.get("/contact",(req,res)=>{
    console.log("Contacts page")
    res.send("<h1 style='background-color:red'><lable for='name'>Name:</lable><input type='text'> <lable fro='email'>Email:</lable><input type='email'><lable for='Number'>Number:</lable><input type='number'> <input value='submit' type='submit'> You  are in the contact page</h1>")
})

app.get("/about",(req,res)=>{
    res.send("<lable for='name' style='background-color:yellow'>Name:</lable><input type='text'> <lable fro='email'>Email:</lable><input type='email'><lable for='Number'>Number:</lable><input type='number'> <input value='submit' type='submit'> <h3 style='background-color:green'>You are in the about page.</h3>")

})

app.get("/cors",(req,res)=>{
    res.json({
        "Student":[{
            "name":"Surya Pulicharla"
        }]
    })
})

app.listen(4000,()=>{
    console.log("Server has started on port 6000")
})