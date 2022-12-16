const express= require('express');
const{readAllParties,createOnePartie,readPartieByCode} = require('../models/parties');
const {readRandomMot} = require('../models/mot');
const {authorize} = require('../utils/auths');


const router= express.Router();

router.get('/',(req,res)=> {
    const allParties= readAllParties();
    return res.json(allParties);

});

router.get('/:code',(req,res)=> {
   res.json(readPartieByCode(req.params.code));
})

router.post('/',  (req,res)=> {
    const nombreJoueurs=  req.body.nombreJoueurs;
    //todo changer ici 

    const nombreIncognitos= req.body.nombreIncognitos;
    const nombreMrXX=  req.body.nombreMrXX;
    const idMot= 4; //  readRandomMot().id;
    const idMembre=  req.body.idMembre;
    
   // if( !nbrJoueurs || !nbrIncognitos || !nbrEspions || !idMot || !idMembre  ) return res.sendStatus(400);
   const createdPartie= createOnePartie(nombreJoueurs, nombreIncognitos, idMot, nombreMrXX, idMembre );
    return res.json(createdPartie);
});
module.exports=router;