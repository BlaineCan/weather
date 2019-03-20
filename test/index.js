const express = require("express");
const app = express();
const request = require("request");

app.get("/", (req, res)=>{
  let url = "http://localhost:8080/";
  request(url, (err, res, body)=>{
    let weather = JSON.parse(body);
    console.log(weather.city);
  })
  res.send("Here!")
})

const port = 5950;
app.listen(port, ()=>{
  console.log(`Testing on PORT:${port}`);
})
