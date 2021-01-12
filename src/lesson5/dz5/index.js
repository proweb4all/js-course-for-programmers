import 'regenerator-runtime/runtime.js'
import * as ArticlesModel from './articles'
import * as AuthModel from './auth'

window.addEventListener('load', function () {
  const form = document.querySelector('.authForm')
  const fieldLogin = form.querySelector('[name=login]')
  const fieldPass = form.querySelector('[name=password]')
  const formErrors = form.querySelector('.authForm__errors')
  const getAllBtn = document.querySelector('.getAll')
  const atrList = document.querySelector('.list')

  form.addEventListener('submit', async function (e) {
    e.preventDefault()
    const response = await AuthModel.login(fieldLogin.value, fieldPass.value)

    if (response.res) {
      localStorage.setItem('auth__token', response.token)
      localStorage.setItem('auth__userName', response.name)
      localStorage.setItem('auth__expire', response.expire)
      showHello()
    } else {
      formErrors.innerHTML = '<p>' + response.errors.join('</p><p>') + '</p>'
    }
  })

  getAllBtn.addEventListener('click', async function () {
    const articles = await ArticlesModel.all()
    atrList.innerHTML = ''

    articles.forEach(art => {
      const div = document.createElement('div')
      const p = document.createElement('p')
      p.classList.add('removeArt')
      p.setAttribute('data-id', art.id_article)
      p.innerHTML = art.title
      div.appendChild(p)
      atrList.appendChild(div)
    })
  })

  atrList.addEventListener('dblclick', async function (e) {
    if (e.target.classList.contains('removeArt')) {
      const id = e.target.dataset.id
      const response = await ArticlesModel.remove(id)

      if (response.res) {
        const div = e.target.parentNode
        div.parentNode.removeChild(div)
      } else {
        alert(response.errors)
      }
    }
  })

  function showHello () {
    const name = localStorage.getItem('auth__userName')
    form.innerHTML = `<h2>Hello, ${name}!</h2>`
  }

  const token = localStorage.getItem('auth__token')

  if (token !== null) {
    // auth/check
    showHello()
  }
})
