const path = require('node:path');
const escape =  require('escape-html');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/partiesEffets.json');
const defaultpartiesEffets=[];

function readAllpartiesEffets(){
    const partiesEffets = parse(jsonDbPath,defaultpartiesEffets);
    return partiesEffets;
};

function createOnepartiesEffets(code_partie, id_effet, id_joueur){
    const partiesEffets= parse(jsonDbPath,defaultpartiesEffets);
    const createdpartieEffet= {
        id: getNextId(),
        code_partie: code_partie,
        id_effet:id_effet,
        id_joueur: id_joueur,
    };

    partiesEffets.push(createdpartieEffet);
    serialize(jsonDbPath,partiesEffets);
    return createdpartieEffet;


}
function getNextId() {
    const partiesEffets = parse(jsonDbPath, defaultpartiesEffets);
    const lastItemIndex = partiesEffets?.length !== 0 ? partiesEffets.length - 1 : undefined;
    if (lastItemIndex === undefined) return 1;
    const lastId = partiesEffets[lastItemIndex]?.id;
    const nextId = lastId + 1;
    return nextId;
  }

  module.exports={readAllpartiesEffets, createOnepartiesEffets};
