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
    const idIncognitos=getRandomIds(nbrIncongnitos,nbrJoueurs);
    const createdPartie= {
        codePartie: getNextId(),
        nbrJoueurs: nbrJoueurs,
        nbrIncongnitos: nbrIncongnitos,
        nbrEspions: nbrEspions,
        idMot: idMot,
        idMembre:idMembre,
        idIncognitos: idIncognitos,
        idEspions: getRandomIdsEspions(nbrEspions,nbrJoueurs,idIncognitos),
    };

    parties.push(createdPartie);
    serialize(jsonDbPath,parties);
    return createdPartie;


};


function getRandomIds(nbrIds, nbrJoueurs){
    let idsEspions=[];
    while(idsEspions.length!= nbrIds){
        let i = (Math.floor(Math.random() * nbrJoueurs) + 1);
       if(!idsEspions.includes(i)) idsEspions.push(i);

    };
   return idsEspions;



};
function getRandomIdsEspions(nbrIdsEspions, nbrJoueurs, idsIncognitos){
    let idsEspions=[];
    while(idsEspions.length!=nbrIdsEspions){
           let i = (Math.floor(Math.random() * nbrJoueurs) + 1);
           //pourquoi ici parfois on a quand meme les  2 meme ids ? 
           if(!idsIncognitos.includes(i)) idsEspions.push(i);
    };
   return idsEspions;



};


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
