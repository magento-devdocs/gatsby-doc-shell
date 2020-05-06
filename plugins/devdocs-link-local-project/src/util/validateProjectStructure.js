/**
 * Utility for validating the project structure of an external project
 *
 * @param {Object} config Configuration object
 * @param {string} config.baseuri the path to the root directory of your local external project
 *
 * @returns {Promise} Promise object containing important project file paths
 */

 //TODO: Write tests

const fs = require("fs")
const path = require("path")

const validatePaths = require("./validatePaths")

const validateProjectStructure = config => {
  return new Promise((resolve, reject) => {
    const { baseuri } = config

    if (!fs.existsSync(baseuri)) {
      reject(new Error(`${baseuri} could not be found on the external project`))
    }

    const paths = {
      markdownDir: path.join(config.baseuri, "src/markdown"),
      dataDir: path.join(config.baseuri, "src/data"),
    }

    validatePaths(Array.from(Object.values(paths)))
      .then(result => {
        resolve(paths)
      })
      .catch(error => {
        reject(error)
      })
  })
}

module.exports = validateProjectStructure
