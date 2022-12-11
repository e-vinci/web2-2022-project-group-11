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
  const code= getNextId();
  const createdPartieJoueur={
    code: code,
    pseudo: escape(pseudo),
    role: getRole(code,espionsIds),
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

function getRole(code, espionsIds){
  let role;
  if(espionsIds.includes(code)) role= 'E';
  else {
    role='J';
  }

  return role;

}



function getNextId() {
  const partiesJoueurs = parse(jsonDbPath, defaultPartiesJoueurs);
  const lastItemIndex = partiesJoueurs?.length !== 0 ? partiesJoueurs.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = partiesJoueurs[lastItemIndex]?.code;
  const nextId = lastId + 1;
  return nextId;
};

module.exports = {readAllPartiesJoueurs, createOnePartieJoueur };