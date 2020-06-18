import getPageGroup from "../util/getPageGroup"

/**
 * Searches a tree-like object for a specific value
 * @param {object} tree
 * @param {array} currentPath
 * @param {string} value
 *
 * @return {Array} An array of intermediate node values leading to the target value
 */
export const getPath = (tree, currentPath, value) => {
  const treeValue = tree.url
  const subTree = tree.pages

  if (treeValue === value) {
    currentPath.push(treeValue)
    return true
  }

  if (subTree) {
    let pathFound = false

    subTree.forEach(entry => {
      if (getPath(entry, currentPath, value)) {
        pathFound = true
      }
    })

    if (pathFound) {
      currentPath.push(treeValue)
      return true
    }
  }

  return false
}
