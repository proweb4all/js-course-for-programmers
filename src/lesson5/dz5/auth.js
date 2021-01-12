import { server } from './server'

async function login (login, password) {
  const response = await server.post('auth.php', { login, password })
  return response.data
}

export { login }
