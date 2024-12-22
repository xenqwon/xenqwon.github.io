const nodemailer = require("nodemailer");


const express = require("express");
const app = express();
const port = 5500;


app.use(express.json());

app.post("/info", (req, res) => {
    
    const data = req.body;
    const info = res.json();
    res.write(info);
    res.json({mesaj: "veri alındı"});
});

app.listen(port, () =>{
    
    console.log("Sunucu çalışıyor: http://localhost:${port}");

});

const transporter = nodemailer.createTransport({

     service: "gmail",
     host: "smtp.gmail.com",
     port: 587,
     auth: {
         user: "ensarsusan@gmail.com",
         pass: "pgsq kvqa ofie syrs"
     }
 });

 var mailOptions = {
     from: "bugra.13b@gmail.com" ,
     to: "ensarsusan@gmail.com",
     subject: "konu",
     text: "${mailContext.json().text}"
 };

 transporter.sendMail(mailOptions, function(error, info){

     if(error)
     {
         console.log(error);
     }
     else{
         console.log("Email yollandı " + info.response);
     }
 });



