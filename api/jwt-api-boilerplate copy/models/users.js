const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('node:path');
const { parse, serialize } = require('../utils/json');
const { json } = require('express');

const jwtSecret = 'ilovemyGame!';
const lifetimeJwt = 24 * 60 * 60 * 1000; // in ms : 24 * 60 * 60 * 1000 = 24h

const saltRounds = 10;

const jsonDbPath = path.join(__dirname, '/../data/users.json');

const defaultUsers = [
  {
    id: 1,
    username: 'admin',
    email:'myemail',
    isAdmin: false,
    password: bcrypt.hashSync('admin', saltRounds),
  },
  {id:2,
  username: '1',
  email: 'm1onEmail',
  isAdmin: true,
  password: bcrypt.hashSync('1',saltRounds),
},
];



async function login(username, password) {
  const userFound = readOneUserFromUsername(username);
  if (!userFound) return undefined;
  const isAdmin= userFound.isAdmin

  const passwordMatch = await bcrypt.compare(password, userFound.password);
  if (!passwordMatch) return undefined;

  const token = jwt.sign(
    { username }, // session data added to the payload (payload : part 2 of a JWT)
    jwtSecret, // secret used for the signature (signature part 3 of a JWT)
    { expiresIn: lifetimeJwt }, // lifetime of the JWT (added to the JWT payload)
  );

  const authenticatedUser = {
    username,
    token,
    isAdmin,
  };

  return authenticatedUser;
}

async function register(username, password,email) {
  const userFound = readOneUserFromUsername(username);
  if (userFound) return undefined;
  const isAdmin= false;
  await createOneUser(username, password,email);

  const token = jwt.sign(
    { username }, // session data added to the payload (payload : part 2 of a JWT)
    jwtSecret, // secret used for the signature (signature part 3 of a JWT)
    { expiresIn: lifetimeJwt }, // lifetime of the JWT (added to the JWT payload)
  );

  const authenticatedUser = {
    username,
    token,
    isAdmin
  };

  return authenticatedUser;
}

function readOneUserFromUsername(username) {
  const users = parse(jsonDbPath, defaultUsers);
  const indexOfUserFound = users.findIndex((user) => user.username === username);
  if (indexOfUserFound < 0) return undefined;

  return users[indexOfUserFound];
}

async function createOneUser(username, password,email) {
  const users = parse(jsonDbPath, defaultUsers);
  const isAdmin=false;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const createdUser = {
    id: getNextId(),
    username,
    email,
    isAdmin,
    password: hashedPassword,
  };

  users.push(createdUser);

  serialize(jsonDbPath, users);

  return createdUser;
}

function getNextId() {
  const users = parse(jsonDbPath, defaultUsers);
  const lastItemIndex = users?.length !== 0 ? users.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = users[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}
function getUsersById(id){
  const users= parse(jsonDbPath,defaultUsers);
  const foundIndex = users.findIndex((user)=> user.id== id )
  const foundUser= users[foundIndex];
  return foundUser;

};
function getUsers(){
  const users= parse(jsonDbPath, defaultUsers);
  return users;
}

module.exports = {
  login,
  register,
  readOneUserFromUsername,
  getUsersById,
  createOneUser,
  getUsers
};
