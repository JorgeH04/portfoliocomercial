const express = require('express');
const router = express.Router();
//const Crema = require('../models/crema');
//const Fruta = require('../models/fruta');
//const Excl = require('../models/exclusivo');

//router.get('/', async (req, res) => {
//  const crema = await Crema.find();
  //const fruta = await Fruta.find();
  //const excl = await Excl.find();
  //res.render('index', { crema, fruta, excl
  //});
//});

router.get('/', async (req, res) => {
  res.render('index')
    });

router.post('/email', async (req, res) => {
  const { name, email, message } = req.body;

  contentHTML = `
      <h1>User Information</h1>
      <ul>
          <li>Username: ${name}</li>
          <li>User Email: ${email}</li>
         
      </ul>
      <p>${message}</p>
  `;

  

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
   user: 'lehj09@gmail.com',
   pass: 'terremototo001'
   
 }
 });
 
 
 let mailOptions = {
  from: 'lehj09@gmail.com',
  to: 'jhessle04@gmail.com',
  subject: 'email website',
  html: contentHTML
 
 };

 

 
 transporter.sendMail(mailOptions, function(error, info){
  if (error) {
   console.log(error);
  }else{
   console.log('Email sent: ' + info.response);
  }
 });
 res.redirect('/contact');
});

module.exports = router;
