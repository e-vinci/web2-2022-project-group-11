const path = require('node:path');
const escape =  require('escape-html');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/parties.json');
const defaultParties=[];

function readAllParties(){
    const parties= parse(jsonDbPath,defaultParties);
    return parties;
}

function createOnePartie(nbrJoueurs, nbrIncongnitos, idMot,nbrEspions, idMembre){
    const parties= parse(jsonDbPath,defaultParties);
    const createdPartie= {
        codePartie: getNextId(),
        nbrJoueurs: nbrJoueurs,
        nbrIncongnitos: nbrIncongnitos,
        nbrEspions: nbrEspions,
        idMot: idMot,
        idMembre:idMembre,
    };
    parties.push(createdPartie);
    serialize(jsonDbPath,parties);
    return createdPartie;


}


function getNextId() {
    const parties = parse(jsonDbPath, defaultParties);
    const lastItemIndex = parties?.length !== 0 ? parties.length - 1 : undefined;
    if (lastItemIndex === undefined) return 1;
    const lastId = parties[lastItemIndex]?.codePartie;
    const nextId = lastId + 1;
    return nextId;
  }

module.exports= {readAllParties, createOnePartie};
