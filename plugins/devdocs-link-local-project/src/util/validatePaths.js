/**
 * A function that validates an array of file paths
 *
 * Returns a promise that provides that array on success
 */

// TODO: Write tests

let fs = require("fs")

const validatePaths = pathArray => {
  return new Promise((resolve, reject) => {
    pathArray.forEach(element => {
      if (!fs.existsSync(element)) {
        const error = `Could not find ${element}`
        reject(new Error(error))
      }
    })
    resolve(pathArray)
  })
}

module.exports = validatePaths
