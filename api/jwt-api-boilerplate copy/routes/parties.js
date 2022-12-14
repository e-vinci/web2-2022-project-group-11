const express= require('express');
const{readAllParties,createOnePartie,readPartieByCode} = require('../models/parties');
const {readRandomMot} = require('../models/mot');

const router= express.Router();

router.get('/',(req,res)=> {
    const allParties= readAllParties();
    return res.json(allParties);

});

router.get('/:code',(req,res)=> {
   res.json(readPartieByCode(req.params.code));
})

router.post('/', (req,res)=> {
    const nbrJoueurs=  req.body.nbrJoueurs;
    //todo changer ici 

    const nbrIncognitos= req.body.nbrIncognitos;
    const nbrEspions=  req.body.nbrEspions;
    const idMot= 4; //  readRandomMot().id;
    const idMembre=  req.body.idMembre;
    
   // if( !nbrJoueurs || !nbrIncognitos || !nbrEspions || !idMot || !idMembre  ) return res.sendStatus(400);
   const createdPartie= createOnePartie(nbrJoueurs, nbrIncognitos, idMot, nbrEspions, idMembre );
    return res.json(createdPartie);
});
module.exports=router;