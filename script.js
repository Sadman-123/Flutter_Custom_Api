const app=require('express')();
const cors=require('cors');
app.use(cors());
app.get('/api',(req,res)=>{
    let data={
        "name":"Sadman",
        "id":19201103123,
        "house":[
            {
                "city":"Dhaka",
                "Country":"BD"
            }
        ],
        "email":"fareless.ranger@gmail.com",
        "security":[
            {
                "pass":"sad@2600",
                "OTP":1234
            }
        ]
    }
    res.json(data);
})
app.listen(3400,()=>{
    console.log("Listening...");
})
