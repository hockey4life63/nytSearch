const Article = require("../models/Article")

const saveArticle = (title, web_url, pub_date)=>{
  console.log(title, web_url)
  let newArticle = new Article({
    title,
    web_url,
    pub_date
  })

  return newArticle.save()
}

const getSaveArticles = ()=> Article.find()

const deleteArticle = _id => Article.remove({_id})

module.exports = {
  saveArticle,
  getSaveArticles,
  deleteArticle
}