import * as ArticlesModel from './articles'

ArticlesModel
  .all()
  .then((articles) => {
    console.log('articles count = ' + articles.length)
    const ind = Math.floor(Math.random() * articles.length)
    console.log('select index ' + ind + ', id = ' + articles[ind].id)

    return ArticlesModel.one(articles[ind].id)
  })
  .then((article) => {
    console.log(article)

    return ArticlesModel.add('New art', 'Some' + Math.random())
  })
  .then(resAdd => {
    console.log(resAdd)
    return ArticlesModel.update(resAdd.id, 'New art + up', 'updated').then(res => ({ res, id: resAdd.id }))
  })
  .then(data => {
    return ArticlesModel.remove(data.id)
  })
  .then(console.log)
  .catch(console.warn)
