const global = require("./global")

const development = require("./development")
const production = require("./production")

const prodConfig = {
  ...global,
  ...production,
  plugins: [...global.plugins, ...production.plugins],
}

const devConfig = {
  ...global,
  ...development,
  plugins: [...global.plugins, ...development.plugins],
}

module.exports = {
  development: devConfig,
  production: prodConfig,
}
