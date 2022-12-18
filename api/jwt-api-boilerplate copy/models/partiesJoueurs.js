const path = require('node:path');
const escape = require('escape-html');
const { parse, serialize } = require('../utils/json');
const { getRandomValues } = require('node:crypto');
const {readPartieByCode} = require('./parties');
const jsonDbPath = path.join(__dirname, '/../data/partiesJoueurs.json');
const defaultPartiesJoueurs = [];



function readAllPartiesJoueurs() {
  const partiesJoueurs = parse(jsonDbPath,defaultPartiesJoueurs );
  return partiesJoueurs;
};


function createOnePartieJoueur(pseudo,code_partie,est_invite){
  const partiesJoueurs= parse(jsonDbPath, defaultPartiesJoueurs);
  const espionsIds= getEspionsId(code_partie);
  const incognitosIds= getIncognitosId(code_partie);
  const nbrJoueurs= getNbrJoueurs(code_partie);
  const code= getNextId(nbrJoueurs);
  const createdPartieJoueur={
    code: code,
    pseudo: escape(pseudo),
    role: getRole(code,espionsIds, incognitosIds),
    code_partie:code_partie,
    est_invite: est_invite,

  };
  partiesJoueurs.push(createdPartieJoueur);
  serialize(jsonDbPath,partiesJoueurs);
  return createdPartieJoueur;
};

function getEspionsId(codePartie){
  const partie = readPartieByCode(codePartie);
  return partie.idEspions;

};

function getNbrJoueurs(codePartie){
  const partie = readPartieByCode(codePartie);
  return partie.nbrJoueurs;

};
function getIncognitosId(codePartie){
  const partie= readPartieByCode(codePartie);
  return partie.idIncognitos;

}

function getRole(code, espionsIds, incognitosIds){
  let role;
  if(espionsIds.includes(code)) role= 'E';
  else if(incognitosIds.includes(code)) {
    role='I';
  } 
  else {
    role='J';
  }
   

  return role;

}



function getNextId(nbrJoueurs) {

  const partiesJoueurs = parse(jsonDbPath, defaultPartiesJoueurs);
  const lastItemIndex = partiesJoueurs?.length !== 0 ? partiesJoueurs.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = partiesJoueurs[lastItemIndex]?.code;
  const nextId = lastId + 1;
  if(lastId==nbrJoueurs){
    nbrJoueurs=0;
    return nbrJoueurs;
  }

  return nextId;
};

module.exports = {readAllPartiesJoueurs, createOnePartieJoueur };