const express= require('express');

const{readAllMots, createOneMot, readRandomMot} = require('../models/mot');
const {authorize}= require('../utils/auths');


const router= express.Router();

router.get('/',(req,res)=> {
    const allMots= readAllMots();
    return res.json(allMots);

});

router.get('/random',(req,res)=> {
    const motRandom = readRandomMot();
    return res.json(motRandom);
});

router.post('/', authorize,(req,res)=> {
    const mot= req?.body?.mot?.length !== 0 ? req.body.mot : undefined;
    const semblable= req?.body?.semblable?.length !== 0 ? req.body.semblable : undefined;
    if(!mot || !semblable) return res.sendStatus(400);
    const createdMot= createOneMot(mot, semblable);
    return res.json(createdMot);


});

module.exports=router;