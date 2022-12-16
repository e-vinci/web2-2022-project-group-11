const path = require('node:path');
const escape =  require('escape-html');
const { parse, serialize } = require('../utils/json');
const { json } = require('express');

const jsonDbPath = path.join(__dirname, '/../data/motsTemporaires.json');
const defaultMotsTemporaires=[];

function readAllMotsTemporaires(){
    const motsTemporaires = parse(jsonDbPath,defaultMotsTemporaires);
    return motsTemporaires;
}

function readMotsKo(){
    const motsTemporaires= parse(jsonDbPath,defaultMotsTemporaires);
    let motsKo=[];
    for(let i=0;i< motsKo.length;i++){
        if(!motsKo.isOk) motsKo[motsKo.length]=motsTemporaires[i];

    }
    return motsKo;
}


function createOneMotTemporaire(mot,semblable){
    const mots= parse(jsonDbPath,defaultMotsTemporaires);
    const createdMot= {
        id: getNextId(),
        mot: escape(mot),
        semblable:escape(semblable),
        isOk: false,
    };

    mots.push(createdMot);
    serialize(jsonDbPath,mots);
    return createdMot;


}


function getNextId() {
    const mots = parse(jsonDbPath, defaultMotsTemporaires);
    const lastItemIndex = mots?.length !== 0 ? mots.length - 1 : undefined;
    if (lastItemIndex === undefined) return 1;
    const lastId = mots[lastItemIndex]?.id;
    const nextId = lastId + 1;
    return nextId;
  }

  module.exports={createOneMotTemporaire, readAllMotsTemporaires,readMotsKo};
