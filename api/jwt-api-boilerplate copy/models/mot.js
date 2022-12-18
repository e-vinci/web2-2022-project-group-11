const path = require('node:path');
const escape =  require('escape-html');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/mots.json');
const defaultMots=[];

function readAllMots(){
    const mots = parse(jsonDbPath,defaultMots);
    return mots;
};
function readOneFromId(id) {
    const mots = parse(jsonDbPath, defaultMots);
    const indexOfMotFound = mots.findIndex((mot) => mot.id == id);
  
    return mots[indexOfMotFound];
  };


  function getUsersById(id){
    const users= parse(jsonDbPath,defaultUsers);
    const foundIndex = users.findIndex((user)=> user.id== id )
    const foundUser= users[foundIndex];
    return foundUser;
  
  };

function readRandomMot(){
    const mots= parse(jsonDbPath,defaultMots);
    //prends le 0 en compte
    const randomInt= (Math.floor(Math.random() * getNextId()-1) + 1);
    const indexFound = mots.findIndex((mot)=> mot.id===randomInt);
    return mots[indexFound];
}
function createOneMot(mot,semblable){
    const mots= parse(jsonDbPath,defaultMots);
    const createdMot= {
        id: getNextId(),
        mot: escape(mot),
        semblable:escape(semblable),
    };

    mots.push(createdMot);
    serialize(jsonDbPath,mots);
    return createdMot;


}
function getNextId() {
    const mots = parse(jsonDbPath, defaultMots);
    const lastItemIndex = mots?.length !== 0 ? mots.length - 1 : undefined;
    if (lastItemIndex === undefined) return 1;
    const lastId = mots[lastItemIndex]?.id;
    const nextId = lastId + 1;
    return nextId;
  }

  module.exports={createOneMot, readAllMots, readOneFromId, readRandomMot};
