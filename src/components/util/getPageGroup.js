const getPageGroup = (slug, pageGroups) => {
  let found = undefined
  pageGroups.nodes.forEach(group => {
    if (inGroup(slug, group)) {
      found = group
    }
  })

  return found
}

const inGroup = (slug, group) => {
  const urlMatch = slug === group.url

  let inChildPages = false

  if (group.pages) {
    inChildPages = group.pages.find(page => {
      return inGroup(slug, page)
    })
  }

  return urlMatch || inChildPages
}

export default getPageGroup
