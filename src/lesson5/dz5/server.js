import axios from 'axios'

const conf = {
  baseURL: '/js-6-api/',
  timeout: 5000
}

const server = axios.create(conf)
const serverWithAuth = axios.create(conf)

server.interceptors.request.use(convertPostBodyToFormData)
serverWithAuth.interceptors.request.use(addAuthToken)
serverWithAuth.interceptors.request.use(convertPostBodyToFormData)

function addAuthToken (request) {
  const token = localStorage.getItem('auth__token')

  if (token !== null) {
    request.headers.Authorization = token
  }

  return request
}

function convertPostBodyToFormData (request) {
  if (request.method === 'post' && !(request.data instanceof FormData)) {
    const body = new FormData()

    for (const key in request.data) {
      body.append(key, request.data[key])
    }

    request.data = body
  }

  return request
}

export { server, serverWithAuth }
