const express = require('express');
const router = express.Router();



// Models
const Excl = require('../models/exclusivo');





router.post('/exclusivo/new-exclusivo',  async (req, res) => {
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
    const newNote = new Excl({ imagePath, sabor, price });
    //newNote.user = req.user.id;
    await newNote.save();
    res.redirect('/exclusivo/add');
  }
});







// New product
router.get('/exclusivo/add',  async (req, res) => {
  const excl = await Excl.find();
  res.render('exclusivo/exclusivobackend',  { excl });
});


router.get('/exclusivobackend/:id', async (req, res) => {
  const { id } = req.params;
  const excl = await Excl.findById(id);
   res.render('exclusivo/exclusivobackend', {excl});
});






//editar
router.get('/exclusivo/edit/:id',  async (req, res) => {
  const excl = await Excl.findById(req.params.id);
  res.render('exclusivo/edit-exclusivo', { excl });
});

router.post('/exclusivo/edit/:id',  async (req, res) => {
  const { id } = req.params;
  await Excl.updateOne({_id: id}, req.body);
  res.redirect('/exclusivo/add');
});









// Delete 
router.get('/exclusivo/delete/:id', async (req, res) => {
  const { id } = req.params;
    await Excl.deleteOne({_id: id});
  res.redirect('/exclusivo/add');
});






module.exports = router;

