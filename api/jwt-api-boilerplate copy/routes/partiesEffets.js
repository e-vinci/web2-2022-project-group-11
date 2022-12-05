const express= require('express');

const{readAllpartiesEffets, createOnepartiesEffets} = require('../models/partieEffet');


const router= express.Router();

router.get('/',(req,res)=> {
    const partiesEffets= readAllpartiesEffets();
    return res.json(partiesEffets);

});


router.post('/', (req,res)=> {
    const code_partie=  req.body.code_partie;
    const id_effet=req.body.id_effet;
    const id_joueur= req.body.id_joueur;

    if(!code_partie || !id_effet || ! id_joueur) return res.sendStatus(400);
    const createdPartieEffet= createOnepartiesEffets(code_partie, id_effet,id_joueur);
    return res.json(createdPartieEffet);


});


module.exports= router;