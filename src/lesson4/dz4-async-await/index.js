import 'regenerator-runtime/runtime.js'
import * as ArticlesModel from './articles'

async function runTests () {
  try {
    const articles = await ArticlesModel.all()
    console.log('articles count = ' + articles.length)
    const ind = Math.floor(Math.random() * articles.length)
    console.log('select index ' + ind + ', id = ' + articles[ind].id)
    const article = await ArticlesModel.one(articles[ind].id)
    console.log(article)
    const t = +(new Date())
    const updateRes = await ArticlesModel.update(article.id, article.title + ' ' + t, article.content)
    console.log(updateRes)
  } catch (e) {
    console.log('err in async f')
    console.warn(e)
  }
}

runTests()
