const path = require('node:path');
const escape = require('escape-html');
const { parse, serialize } = require('../utils/json');
const { getRandomValues } = require('node:crypto');

const jsonDbPath = path.join(__dirname, '/../data/partiesJoueurs.json');
const defaultPartiesJoueurs = [];

function readAllPartiesJoueurs() {
  const partiesJoueurs = parse(jsonDbPath,defaultPartiesJoueurs );
  return partiesJoueurs;
};


function createOnePartieJoueur(pseudo,role,est_invite,code_partie){
  const partiesJoueurs= parse(jsonDbPath, partiesJoueurs);
  const createdPartieJoueur={
    code: getNextId(),
    pseudo: escape(pseudo),
    role: role,
    code_partie:code_partie,
    est_invite: est_invite,

  };
  partiesJoueurs.push(createdPartieJoueur);
  serialize(jsonDbPath,partiesJoueurs);
  return createdPartieJoueur;
};



function getNextId() {
  const partiesJoueurs = parse(jsonDbPath, defaultPartiesJoueurs);
  const lastItemIndex = partiesJoueurs?.length !== 0 ? partiesJoueurs.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = partiesJoueurs[lastItemIndex]?.code;
  const nextId = lastId + 1;
  return nextId;
};

module.exports = {readAllPartiesJoueurs, createOnePartieJoueur };