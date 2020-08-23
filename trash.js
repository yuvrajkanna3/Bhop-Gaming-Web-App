const express = require('express');
const app = express();
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});
app.use(express.static(path.join(__dirname, '/style.css')));
app.listen(3000, function(){
  console.log('the server is running in port 3000');
});
