import axios from 'axios'

const instance = axios.create({
  baseURL: '/js-hw-api/',
  timeout: 5000
})

instance.interceptors.request.use(addAuthToken)
instance.interceptors.request.use(convertPostBodyToFormData)

function addAuthToken(request){
  request.headers.Autorization = '50537266ded1d3eb1e6923f7f4b2f484'
  return request
}
function convertPostBodyToFormData(request){
  if (request.method === 'post' && !(request.data instanceof FormData)) {
    const body = new FormData()
    for (let key in request.data) {
      body.append(key, request.data[key])
    }
    request.data = body
  }
  return request
}

export default instance
