const express=require('express')
const app=express();
const morgan=require('morgan')
const port =4000;


 app.use(morgan('dev'));
app.get('/employlist',(req,res)=>{
    let result={
        id:14,
        name:'employee list'
    }
    console.log("employee list api ",process.env.DB_NAME);
    res.status(200).json(result);
});

app.get('/employeeDetails',(req,res)=>{
    let result={
        id:15,
        name:'employee Details'
    } 
    console.log('employee Api ',process.env.DB_NAME);
    res.status(200).json(result);
});

app.listen(port,()=>{
    console.log("App is listening at http://localhost:"+port);
})