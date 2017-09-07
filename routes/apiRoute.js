const router = require("express").Router();
const API = require("../API/APIorm")
const db = require("../db/dbOrm")

router.get("/search", (req,res)=>{
  API(req.body.query, req.body.startYear, req.body.endYear).then(results =>{ 
      console.log(results.data)
      res.json(results.data)
    }).catch(err => res.json(err))
})

router.post("/save", (req, res)=>{
  console.log("post req:", req.body) 
  db.saveArticle(req.body.title, req.body.web_url, req.body.pub_date).then(results =>res.json(results)).catch(err=>res.json(err))
})

router.get("/save", (req, res)=>{
    db.getSaveArticles().then(results =>res.json(results)).catch(err=>res.json(err))
})

router.delete("/save", (req, res)=>{
    db.deleteArticle(req.body._id).then(results =>res.json(results)).catch(err=>res.json(err))
})

module.exports = router