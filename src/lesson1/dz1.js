function cleanWhiteSpace (str) {
  return str.trim().replace(/\s+/g, ' ')
}

function wordsCount (str) {
  const cleanStr = cleanWhiteSpace(str)
  return cleanStr.length > 0 ? cleanStr.replace(/\S/g, '').length + 1 : 0
}

function * getWords (str) {
  const cleanStr = cleanWhiteSpace(str)
  if (cleanStr.length === 0) { return null }
  let index = 0
  let indexNew = 0
  while ((indexNew = cleanStr.indexOf(' ', index + 1)) >= 0) {
    yield cleanStr.substr(index, indexNew - index).trim()
    index = indexNew
  }
  yield cleanStr.substr(index).trim()
}

export { wordsCount, getWords }
