import express from 'express';
import bodyParser from 'body-parser'; 

const app = express();        
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
  res.sendFile("/Users/kelvinkibet/Desktop/BMICalculator/index.html");
});

app.post("/", function (req, res){
  console.log(req.body);
  var weight = JSON.parse(req.body.weight);
  var height = JSON.parse(req.body.height);

  var result = (weight*weight)/height;

  res.send("The result is " + result);
});

app.listen(1500, function(){
    console.log("server is running");
});
