const configs = require('./configs');

require("dotenv").config({
  path: `.env`,
})

const environment = process.env.NODE_ENV || "development";

module.exports = configs[environment];
