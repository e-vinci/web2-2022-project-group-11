const express= require('express');
const { createOneMot } = require('../models/mot');
const {authorize} = require('../utils/auths');

const { createOneMotTemporaire , readAllMotsTemporaires, readMotsKo, deleteOneMotTemporaire} = require('../models/motsTemporaires');


const router= express.Router();

router.get('/',(req,res)=> {
    const allMotsTemp= readAllMotsTemporaires();
    return res.json(allMotsTemp);

});


router.post('/', authorize, (req,res)=> {
    const mot= req?.body?.mot?.length !== 0 ? req.body.mot : undefined;
    const semblable= req?.body?.semblable?.length !== 0 ? req.body.semblable : undefined;
    if(!mot || !semblable) return res.sendStatus(400);
    const createdMotTemp= createOneMotTemporaire(mot, semblable);
    return res.json(createdMotTemp);


});

router.patch('/:id',(req,res)=> {
    const allMotsTemp= readAllMotsTemporaires();

    const isOk = req.body.ok;
    const foundIndex= allMotsTemp.findIndex(mot=> mot.id==req.params.id);
    if(foundIndex<0) return res.sendStatus(404);
    
    const updatedWord = {...allMotsTemp[foundIndex], ...req.body.ok};
    allMotsTemp[foundIndex]=updatedWord;
    const mot= updatedWord.mot;
    const semblable= updatedWord.semblable;
    createOneMot(mot,semblable);
    createOneMot(semblable, mot);
    deleteOneMotTemporaire(mot);
    
    res.json(updatedWord);

});


router.get('/ko',(req,res)=> {
    
    const allMotsTempKo= readMotsKo();
    return res.json(allMotsTempKo);

});


module.exports=router;