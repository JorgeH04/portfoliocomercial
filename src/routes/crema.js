const express = require('express');
const router = express.Router();


// Models
const Crema = require('../models/crema');






// New product
router.get('/crema/add',  async (req, res) => {
  const crema = await Crema.find();
  res.render('crema/cremabackend',  { crema });
});


router.post('/crema/new-crema',  async (req, res) => {
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
    const newNote = new Crema({ imagePath, sabor, price });
    //newNote.user = req.user.id;
    await newNote.save();
    res.redirect('/crema/add');
  }
});









//Editar
router.get('/crema/edit/:id',  async (req, res) => {
  const crema = await Crema.findById(req.params.id);
  res.render('crema/edit-crema', { crema });
});

router.post('/crema/edit/:id',  async (req, res) => {
  const { id } = req.params;
  await Crema.updateOne({_id: id}, req.body);
  res.redirect('/crema/add');
});



// Delete 
router.get('/crema/delete/:id', async (req, res) => {
  const { id } = req.params;
    await Crema.deleteOne({_id: id});
  res.redirect('/crema/add');
});


module.exports = router;

