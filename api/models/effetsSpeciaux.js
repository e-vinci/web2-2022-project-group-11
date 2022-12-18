const path = require('node:path');
const escape = require('escape-html');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/effetsSpeciaux.json');
const defaultEffets = [];

function readAllEffets() {
  const effets = parse(jsonDbPath, defaultEffets);
  return effets;
}

function createOneEffet(nom, description) {
  const effets = parse(jsonDbPath, defaultEffets);
  const createdEffet = {
    id: getNextId(),
    nom: nom,
    description: description,
  };
  effets.push(createdEffet);
  serialize(jsonDbPath, effets);
  return createdEffet
}

function getNextId() {
  const effets = parse(jsonDbPath, defaultEffets);
  const lastItemIndex = effets?.length !== 0 ? effets.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = effets[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

module.exports = { readAllEffets, createOneEffet };
