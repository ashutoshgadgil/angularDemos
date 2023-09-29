var express=require('express');
var mongodb=require('mongodb');
var bodyparser=require('body-parser');
var cors=require('cors');
var mongoclient=mongodb.MongoClient;

var app=express();

app.use(bodyparser());
app.use(cors());

//getTotalExpenses

app.get("/showExpenses",(req,res)=>{
    mongoclient.connect("mongodb://127.0.0.1:27017",(err,conn)=>{
        if(err)
        {
            console.log("Error connecting server");
        }
        else
        {
            var db=conn.db("mydb1");

            db.collection("expenseInfo").find({}).toArray((e,s)=>{
                
                if(e)
                {
                    console.log("Error fetching records");
                }
                {
                    console.log(s);
                }  
                console.log("In Show");
                res.send(s);
            })
           
        }
    })
})


app.get("/getTotalExpenses",(req,res)=>{
    mongoclient.connect("mongodb://127.0.0.1:27017",(err,conn)=>{
        if(err)
        {
            console.log("Error connecting server");
        }
        else
        {
            var db=conn.db("mydb1");

            db.collection("expenseInfo").aggregate([{$group:{_id:null,sum_val:{$sum:"$expenseDay"}}}]).toArray((e,s)=>{
                console.log(s[0].sum_val);
                res.send(s);
            });
            //res.end();
        }
    })
})

app.post("/getSelectedExpenses",(req,res)=>{

    var startdate=req.body.startDate;
    var enddate=req.body.endDate;


    mongoclient.connect("mongodb://127.0.0.1:27017",(err,conn)=>{
        if(err)
        {
            console.log("Error connecting server");
        }
        else
        {
            var db=conn.db("mydb1");

            db.collection("expenseInfo").find({todayDate:{$gte:startdate,$lte:enddate}}).toArray((e,s)=>{
                console.log(s);
                res.send(s);
            });
        }
    })
})

app.post("/saveExpenses",(req,res)=>{
    var house_rent=req.body.hrent;
    var electric_bill=req.body.ebill;
    var food_bill=req.body.foodAmt;
    var travel_amount=req.body.tcost;
    var other_amount=req.body.otherexpenses;
    var today_date=req.body.today;
    var expenseOfDay=Number(house_rent)+Number(electric_bill)+Number(food_bill)+Number(travel_amount)+Number(other_amount);

    var totExpenses={houseRent:house_rent,electricBill:electric_bill,foodBill:food_bill,travelAmount:travel_amount,otherAmount:other_amount,todayDate:today_date,expenseDay:expenseOfDay};

    mongoclient.connect("mongodb://127.0.0.1:27017",(err,conn)=>{
        if(err)
        {
            console.log("Error connecting server");
        }
        else
        {
            var db=conn.db("mydb1");

            db.collection("expenseInfo").insertOne(totExpenses,(err,data)=>{
                if(err)
                {
                    console.log("Error saving data");
                }
                else
                {
                    console.log("Record Saved...");
                    console.log(data);
                }
                conn.close();
                res.end();
            })
        }
    })
})

app.listen(3000,()=>{
    console.log("Server started...");
})