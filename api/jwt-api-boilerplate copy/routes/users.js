const express = require('express');
const {getUsersById}= require('../models/users')

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ users: [{ name: 'e-baron' }] });
});

router.get('/:id',(req,res)=> {
  res.json(getUsersById(req.params.id));
})

module.exports = router;
