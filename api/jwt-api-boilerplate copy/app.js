const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:8080', 'https://e-baron.github.io'],
};

const usersRouter = require('./routes/users');
const authsRouter = require('./routes/auths');
const motsRouter= require('./routes/mots');
const partiesRouter= require('./routes/parties');
const effetsRouter= require('./routes/effetsSpeciaux');
const partiesEffetsRouter = require('./routes/partiesEffets');
const partiesJoueurRouter= require('./routes/partiesJoueurs');
const motsTemporairesRouter= require('./routes/motsTemporaires');




const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors(corsOptions));

app.use('/users', usersRouter);
app.use('/auths', authsRouter);
app.use('/mots', cors(corsOptions), motsRouter);
app.use('/parties', partiesRouter);
app.use('/effets', effetsRouter);
app.use('/partiesEffets', partiesEffetsRouter);
app.use('/partiesJoueurs', partiesJoueurRouter);
app.use('/motsTemporaires',motsTemporairesRouter);



module.exports = app;
