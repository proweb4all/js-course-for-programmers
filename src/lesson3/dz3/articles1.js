import * as serverApi from './db'

function all () {
  return new Promise((resolve, reject) => {
    serverApi.all((response) => {
      const info = JSON.parse(response)
      if (info.code === 200) {
        resolve(info.data)
      } else {
        reject(info.status)
      }
    })
  })
}

function one (id) {
  return new Promise((resolve, reject) => {
    serverApi.get(id, (response) => {
      const info = JSON.parse(response)
      if (info.code === 200) {
        resolve(info.data)
      } else {
        reject(info.status)
      }
    })
  })
}

function remove (id) {
  return new Promise((resolve, reject) => {
    serverApi.remove(id, (response) => {
      const info = JSON.parse(response)
      if (info.code === 200) {
        resolve(info.data)
      } else {
        reject(info.status)
      }
    })
  })
}

export { all, one, remove }
