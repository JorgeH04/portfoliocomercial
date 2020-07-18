const express = require('express');
const router = express.Router();


// Models
const Fruta = require('../models/fruta');





router.post('/fruta/new-fruta',  async (req, res) => {
  const { imagePath, sabor, price } = req.body;
  const errors = [];
  if (!imagePath) {
    errors.push({text: 'Please Write a Title.'});
  }
  if (!sabor) {
    errors.push({text: 'Please Write a Description'});
  }
 
  if (errors.length > 0) {
    res.render('notes/new-note', {
      errors,
      imagePath,
      sabor,
      price
    });
  } else {
    const newNote = new Fruta({ imagePath, sabor, price });
    //newNote.user = req.user.id;
    await newNote.save();
    res.redirect('/fruta/add');
  }
});













// New product
router.get('/fruta/add',  async (req, res) => {
  const fruta = await Fruta.find();
  res.render('fruta/frutabackend',  { fruta });
});


router.get('/frutabackend/:id', async (req, res) => {
  const { id } = req.params;
  const fruta = await Fruta.findById(id);
   res.render('fruta/frutabackend', {fruta});
});









//editar
router.get('/fruta/edit/:id',  async (req, res) => {
  const fruta = await Fruta.findById(req.params.id);
  res.render('fruta/edit-fruta', { fruta });
});

router.post('/fruta/edit/:id',  async (req, res) => {
  const { id } = req.params;
  await Fruta.updateOne({_id: id}, req.body);
  res.redirect('/fruta/add');
});






// Delete 
router.get('/fruta/delete/:id', async (req, res) => {
  const { id } = req.params;
    await Fruta.deleteOne({_id: id});
  res.redirect('/fruta/add');
});






module.exports = router;

