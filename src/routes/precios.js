const express = require('express');
const router = express.Router();


// Models
const Precios = require('../models/precios');




router.post('/precio/new-precio',  async (req, res) => {
  const { imagePath, producto, precio } = req.body;
  const errors = [];
  if (!imagePath) {
    errors.push({text: 'Please Write a Title.'});
  }
  if (!producto) {
    errors.push({text: 'Please Write a Description'});
  }
  if (!precio) {
    errors.push({text: 'Please Write a Description'});
  }
 
  if (errors.length > 0) {
    res.render('notes/new-note', {
      errors,
      imagePath,
      sabor
    });
  } else {
    const newNote = new Precios({ imagePath, producto, precio });
    //newNote.user = req.user.id;
    await newNote.save();
    req.flash('success_msg', 'Note Added Successfully');
    res.redirect('/crema/add');
  }
});













// New product
router.get('/crema/add',  async (req, res) => {
  const precios = await Precios.find();
  res.render('crema/cremabackend',  { crema });
});


router.get('/cremabackend/:id', async (req, res) => {
  const { id } = req.params;
  const precios = await Precios.findById(id);
   res.render('crema/cremabackend', {crema});
});





//editar
router.get('/precios/edit/:id',  async (req, res) => {
    const precios = await Precios.findById(req.params.id);
    res.render('precios/edit-precio', { precios });
  });
  
  router.post('/precios/edit/:id',  async (req, res) => {
    const { id } = req.params;
    await Precios.updateOne({_id: id}, req.body);
    res.redirect('/preciosbackend/' + id);
  });






// Delete 
router.get('/precios/delete/:id', async (req, res) => {
  const { id } = req.params;
    await Precios.deleteOne({_id: id});
  res.redirect('/preciosbackend');
});





module.exports = router;

