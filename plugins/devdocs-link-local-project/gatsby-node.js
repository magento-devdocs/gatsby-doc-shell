const fs = require("fs")
const path = require("path")

let validateProjectStructure = require("./src/util/validateProjectStructure")

require("dotenv").config({
  path: `.env`,
})

/**
 * Creates symlinks to the relevant directories in an external project
 * 
 * @param {string} localProjectDir the root directory of a local external project
 * @param {string} externalDir where to link the local external project
 * 
 */
const linkProject = (localProjectDir, externalDir) => {
  const config = {
    baseuri: localProjectDir,
  }

  // Validate external project structure
  validateProjectStructure(config)
    .then(result => {
      const { markdownDir, dataDir } = result

      const markdownLinkDir = path.join(externalDir, "markdown")
      const dataLinkDir = path.join(externalDir, "data")

      // Link directories to this project
      fs.symlink(markdownDir, markdownLinkDir, "dir", error => {
        if (error) throw error
      })
      fs.symlink(dataDir, dataLinkDir, "dir", error => {
        if (error) throw error
      })
    })
    .catch(error => {
      throw error
    })
}

/**
 * An external project directory is linked if the given directory path
 * has a 'data' or 'markdown' directory
 * 
 * @param {string} directory this project's directory for external content
 * 
 * @returns {boolean} true if it looks like this directory is linked to external content, false otherwise
 */
const isLinked = directory => {
  let linked = false

  try {
    if (fs.statSync(directory + "/data")) {
      linked = true
    }

    if (fs.statSync(directory + "/markdown")) {
      linked = true
    }
  } catch (error) {}

  return linked
}

/**
 * Runs after Gatsby bootstraps but before running init code
 */
exports.onPreInit = (_, pluginOptions) => {
  const { externalDir, localProjectDir } = pluginOptions

  const isPreviouslyLinked = isLinked(externalDir)

  if (isPreviouslyLinked) {
    console.log("Project previously linked. Skipping linking step.")
    return
  }

  console.log(`Linking local directory: ${localProjectDir}`)

  linkProject(localProjectDir, externalDir)
}
