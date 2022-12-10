const path = require('node:path');
const escape =  require('escape-html');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/parties.json');
const defaultParties=[];

function readAllParties(){
    const parties= parse(jsonDbPath,defaultParties);
    return parties;
};


function createOnePartie(nbrJoueurs, nbrIncongnitos, idMot,nbrEspions, idMembre){
    const parties= parse(jsonDbPath,defaultParties);
    const createdPartie= {
        codePartie: getNextId(),
        nbrJoueurs: nbrJoueurs,
        nbrIncongnitos: nbrIncongnitos,
        nbrEspions: nbrEspions,
        idMot: idMot,
        idMembre:idMembre,
        idEspions: getRandomIds(nbrEspions,nbrJoueurs),
    };

    parties.push(createdPartie);
    serialize(jsonDbPath,parties);
    return createdPartie;


};


function getRandomIds(nbrEspions, nbrJoueurs){
    let idsEspions=[];

   for(let i =0;i<nbrEspions;i++){
   let i = (Math.floor(Math.random() * nbrJoueurs) + 1);
   idsEspions.push(i);

   
   } ;
   return idsEspions;



}


function readPartieByCode(codePartie){
    const parties= parse(jsonDbPath, defaultParties);
    const indexFound= parties.findIndex((partie)=> partie.codePartie== codePartie);
    if(indexFound<0) return undefined;
    return parties[indexFound];
};

function getNextId() {
    const parties = parse(jsonDbPath, defaultParties);
    const lastItemIndex = parties?.length !== 0 ? parties.length - 1 : undefined;
    if (lastItemIndex === undefined) return 1;
    const lastId = parties[lastItemIndex]?.codePartie;
    const nextId = lastId + 1;
    return nextId;
  }

module.exports= {readAllParties, createOnePartie,readPartieByCode, getRandomIds};
