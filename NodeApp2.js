var express=require('express');
var cors=require('cors');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var userschema=mongoose.Schema;

var user=new userschema({
    username:String,
    pw1:String,
    pw2:String
});



var app=express();

app.use(cors());
app.use(bodyparser());

var usermodel=mongoose.model("userdetails",user);

app.post("/registerUser",(req,res)=>{

    var uname=req.body.username;
    var password1=req.body.pw1;
    var password2=req.body.pw2;

   
    var users=new usermodel({username:uname,pw1:password1,pw2:password2});

    console.log("In Post");

    

    mongoose.connect("mongodb://127.0.0.1:27017/mydb",(err,conn)=>{
        if(err)
        {
            console.log("Error connecting database");
        }
        else
        {
            console.log("Connection Successful..");
            users.save((err,success)=>{
                if(err)
                {
                    console.log("Error saving record");
                }
                else
                {
                    console.log("Registration Successful..");
                }
            })

        }
    })
    res.end();
})

app.get("/showUsers",(req,res)=>{
    mongoose.connect("mongodb://127.0.0.1:27017/mydb",(err,conn)=>{
        if(err)
        {
            console.log("Error connecting database");
        }
        else
        {
            console.log("Connection Successful..");
          
            usermodel.find({},(err,data)=>{
                if(err)
                {
                    console.log("Error fetching records");
                }
                else
                {
                    console.log(data);
                    res.send(data);
                }
            })
        }
    })
    //res.end();
})

app.listen(3000,()=>{
    console.log("Server started...");
})