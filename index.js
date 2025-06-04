//const {Person} = require('./person');
// require('./modules/path');
// require('./modules/fs');
//console.log(person.sayMyName());
//require('./modules/http');
//const person = new Person('Zeca');
const dotenv = require('dotenv');
const connectToDatabase = require('./src/database/connect');
dotenv.config();
connectToDatabase(); //Deve ser chamado depois de carregar os dados sensiveis do banco para carregar o banco já configurado!
require('./modules/express');

