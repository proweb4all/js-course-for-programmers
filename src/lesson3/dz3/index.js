import * as ArticlesModel from './articles'

ArticlesModel
  .all()
  .then((articles) => {
    console.log(articles.length)
    // берём случайный индекс
    const ind = Math.floor(Math.random() * articles.length)
    console.log('select index ' + ind + ', id = ' + articles[ind].id)
    // получаем статью по id
    return ArticlesModel.one(articles[ind].id)
  })
  .then((article) => {
    console.log(article)
    // пробуем удалить её
    return ArticlesModel.remove(article.id)
  })
  .then((res) => {
    console.log('что с удалением? - ' + res)
    // а сколько статей в базе сейчас
    return ArticlesModel.remove(100)
  })
  .then((res) => {
    console.log('что с удалением? - ' + res)
    // а сколько статей в базе сейчас
    return ArticlesModel.all()
  })
  .then((articles) => {
    console.log('articles count = ' + articles.length)
  })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    console.log('end')
  })

// ArticlesModel
//   .all()
//   .then((articles) => {
//     console.log('articles count = ' + articles.length)
//     // берём случайный индекс
//     const ind = Math.floor(Math.random() * articles.length)
//     console.log('select index ' + ind + ', id = ' + articles[ind].id)
//     // получаем статью по id
//     return ArticlesModel.one(articles[ind].id)
//   })
//   .then((article) => {
//     console.log(article)
//     // пробуем удалить её
//     return ArticlesModel.remove(article.id)
//   })
//   .then((res) => {
//     console.log('что с удалением? - ' + res)
//     // а сколько статей в базе сейчас
//     return ArticlesModel.all()
//   })
//   .then((articles) => {
//     console.log('articles count = ' + articles.length)
//   })
//   .catch(err => {
//     console.log(err)
//   })
//   .finally(() => {
//     console.log('end')
//   })

// // а сколько статей в базе сейчас
// ArticlesModel.all((articles) => {
//         console.log('articles count = ' + articles.length)
//       }, (error) => {
//         console.log(error + ' in articles list after delete')
//       })
//     }, (error) => {
//       console.log(error + ' in articles delete')
//     })
//   }, (error) => {
//     console.log(error + ' in articles one')
//   })
// }, (error) => {
//   console.log(error + ' in articles list')
// })
