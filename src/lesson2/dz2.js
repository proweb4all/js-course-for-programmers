import { watchObj as watchObj0, EmailParser as EmailParser0 } from './module.js'


const works = [
  { wo: watchObj0, ep: EmailParser0 }
]

const email1 = 'info@ntschool.ru'
const email2 = 'support@@ntschool.ru'
const email3 = 'some1@nz'

window.addEventListener('load', function () {
  works.forEach((item, i) => {
    this.document.body.innerHTML += `<div>${i} -------------- </div>`
    this.console.log(`start ${i} --------------`)

    try {
      const parser = new item.ep(email1)

      this.console.log(parser.isCorrect)
      this.console.log(parser.name)
      this.console.log(parser.domain)

      parser.email = email2
      this.console.log(parser.isCorrect)
      this.console.log(parser.name)
      this.console.log(parser.domain)

      parser.email = email3
      this.console.log(parser.isCorrect)
      this.console.log(parser.name)
      this.console.log(parser.domain)

      const div = document.createElement('div')
      document.body.appendChild(div)

      const cleverDiv = item.wo(div, function (prop, val) {
        console.log(prop, val)
      })

      cleverDiv.innerHTML = '<strong>HTML</strong><em>Changed</em>'
      /*
				в консоли:
				innerHTML <strong>HTML</strong><em>Changed</em
			*/

      cleverDiv.style.color = 'red'
      /*
				весь текст стал красным
				в консоли:
				color red
			*/

      cleverDiv.querySelector('em').style.color = 'green'
      /*
				em стал зелёным
				в консоли ничего не добавилось

				// популярная ошибка Illegal invocation - из-за манипуляций у функции сломался this
			*/

      cleverDiv.classList.add('some')
    } catch (e) {
      console.log(e)
    }

    document.body.innerHTML += '<hr>'
    console.log('---------------------------------')
  })
})
