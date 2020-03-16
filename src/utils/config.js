// config dotenv
const dotenv = require('dotenv');
const variableExpansion = require('dotenv-expand');
const myEnv = dotenv.config();
variableExpansion(myEnv);

module.exports = {
    url: process.env.URL,
};