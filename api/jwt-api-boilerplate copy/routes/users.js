const express = require('express');
const {getUsersById, createOneUser,getUsers}= require('../models/users')

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  const allUsers= getUsers();
   return res.json(allUsers);
});

router.get('/:id',(req,res)=> {
  res.json(getUsersById(req.params.id));
});

router.post('/',(req,res)=> {
  const username= req?.body?.username?.length !==0 ? req.body.username: undefined;
  const email = req.body.email;
  const password= req.body.password;
  const isAdmin= false;
  const createdUser = createOneUser(username, password, email,isAdmin);
  return res.json(createdUser);

} );


module.exports = router;
