const express= require('express');
const{readAllParties,createOnePartie} = require('../models/parties');
const {readRandomMot} = require('../models/mot');

const router= express.Router();

router.get('/',(req,res)=> {
    const allParties= readAllParties();
    return res.json(allParties);

});

router.post('/', (req,res)=> {
    const nbrJoueurs=  req.body.nbrJoueurs;
    //todo changer ici 

    const nbrIncognitos= req.body.nbrIncognitos;
    const nbrEspions=  req.body.nbrEspions;
    const idMot= readRandomMot();
    const idMembre=  req.body.idMembre;
   // if( !nbrJoueurs || !nbrIncognitos || !nbrEspions || !idMot || !idMembre  ) return res.sendStatus(400);
   const createdPartie= createOnePartie(nbrJoueurs, nbrIncognitos, idMot, nbrEspions, idMembre );
    return res.json(createdPartie);
});
module.exports=router;