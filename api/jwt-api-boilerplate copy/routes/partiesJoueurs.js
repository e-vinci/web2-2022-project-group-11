const express= require('express');

const {createOnePartieJoueur, readAllPartiesJoueurs}=  require('../models/partiesJoueurs.js');


const router= express.Router();

router.get('/',(req,res)=> {
    const allPartiesJoueurs= readAllPartiesJoueurs();
    return res.json(allPartiesJoueurs);

});

router.post('/',(req,res)=> {
    //recuperrer les id espions/incognitos crees dans la partie losrs de son POST et si num == un des id -> role  espion
    const allPartiesJoueurs= readAllPartiesJoueurs();
    const pseudo =  req?.body?.pseudo?.length !== 0 ? req.body.pseudo : undefined;
    const code_partie= req.body.code_partie;
    const est_invite= req.body.est_invite;

    if(!pseudo) return res.sendStatus(400);
    const createdPartieJoueur= createOnePartieJoueur(pseudo,code_partie,est_invite);
    return res.json(createdPartieJoueur);

});
module.exports= router;