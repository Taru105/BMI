//jshint esversion:6
const express = require("express");
const BodyParser = require("body-parser");
const https = require("https")

const app = express();

app.use(BodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/BMI.html");
})
app.post("/",function(req,res){
    var nam = req.body.name;
    var wt = parseFloat(req.body.weight);
    var ht = parseFloat(req.body.height);
    var h = (ht/100);
    var bmi = (wt/(h**2));
    text = nam + ", Your BMI is " + bmi;
    res.write(text);
    res.write("\n")
    if(bmi<18.5)
    {
        res.write("\n")
        res.write(nam + ", you are underweight");
    }
    else if(bmi>=18.5 && bmi<=24.9)
    {
        res.write("\n")
        res.write(nam + ", Awesome....your bmi is normal");
    }
    else if(bmi>=25 && bmi<=29.9)
    {
        res.write("\n")
        res.write(nam + ", you are overweight");
    }
    else if(bmi>=30){
        res.write("\n")
        res.write(nam+ ", Your bmi is  in the category of obseity, track your diets!!!!")
    }
    // else{
    //     res.write("\n");
    //     res.write("Do you want to check again??")
    //     res.send(__dirname + "/ouput.html");
    // }    
    res.send()
})
app.listen(process.env.PORT || 3000,function(){
    console.log("Server at 3000 port has started ")
})