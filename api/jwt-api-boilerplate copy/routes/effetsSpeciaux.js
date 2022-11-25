const express= require('express');

const {createOneEffet, readAllEffets}=  require('../models/effetsSpeciaux.js');


const router= express.Router();

router.get('/',(req,res)=> {
    const allEffets= readAllEffets();
    return res.json(allEffets);

});

router.post('/',(req,res)=> {
    const allEffets= readAllEffets();
    const nom =  req?.body?.nom?.length !== 0 ? req.body.nom : undefined;
    const description =  req?.body?.description?.length !== 0 ? req.body.description : undefined;
    if(!nom || !description) return res.sendStatus(400);
    const createdEffet= createOneEffet(nom,description);
    return res.json(createdEffet);

});
module.exports= router;