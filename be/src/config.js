const dotenv = require('dotenv');
const path = require('path');

process.env.NODE_ENV === 'production' ?
   dotenv.config({ path: __dirname + '../.env' }) : dotenv.config({ path: __dirname + '../.env.dev' });
   
module.exports = {
    jwtKey:  process.env.JWT_SECRET ,
};
