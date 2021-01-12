import { server, serverWithAuth } from './server'

async function all () {
  const response = await server.get('articles.php')
  // console.log(response.data)
  return response.data
}

async function remove (id) {
  const response = await serverWithAuth.delete('articles.php', { params: { id } })
  return response.data
}

export { all, remove }
