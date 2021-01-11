import server from './server';

// function all () {
//   return server.get('articles.php')
//     .then(response => response.data)
// }

async function all () {
  const response = await server.get('articles.php')
  return response.data
}

async function one (id) {
  const response = await server.get('articles.php', {params: {id}})
  return response.data
}

async function add (title, content) {
  const response = await server.post('articles.php', {title, content})
  return response.data
}

async function update (id, title, content) {
  const response = await server.put('articles.php', {id, title, content})
  return response.data
}

async function remove (id) {
  const response = await server.delete('articles.php', {params: {id}})
  return response.data
}

export { all, one, add, update, remove }
