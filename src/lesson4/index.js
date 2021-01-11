function makeRequest(url, options = {}) {
  return fetch(url, options).then(response => {
    if (response.status === 200) {
      return response.json()
    }
    return response.text().then(text => {
      throw new Error(text)
    })
  })
}

makeRequest('/js-frontend-api/articles.php')
  .then(console.log)
  .catch(console.warn)
