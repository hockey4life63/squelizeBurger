const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const db = require("../models");

let router =express.Router();
console.log(db.burger2, db.Burger2)
router.get("/", (req, res)=>{
  db.burger2.findAll({}).then(data=>{
    let burgerObj ={
      burgers:data
    }
    res.render("index", burgerObj)
  })
})

router.post("/", (req, res)=>{
  let name = req.body.name;
  db.burger2.create({
    burger_name:req.body.name
  }).then(()=>res.redirect("/"))
})

router.put("/:id", (req, res)=>{
  let id = {id: +req.params.id};
  db.User.findOrCreate({
    where:{
      username: req.body.name
    }
  }).then((results)=>{
    if(results[1]){
      db.burger2.update({
    devoured: true,
    eaten_by: results[0].username
  },
  {
    where:id
  }).then(()=>res.redirect("/"))
    } else{
      db.User.update({
        where:{
          id:results[0].id
        }
      }).then(()=>{
         db.burger2.update({
          devoured: true,
          eaten_by: results[0].id
        },
        {
          where:id
        }).then(()=>res.redirect("/"))
      })
    }
  })
 })

router.delete("/:id", (req, res)=>{
  let id = {id: +req.params.id};
  db.burger2.destroy({
    where:id
  }).then(()=>res.redirect("/"))
})

router.put("/name/:id", (req, res)=>{
  let id =  {id: +req.params.id};
  let colObj = {
    burger_name: req.body.name
  }
  db.burger2.update(colObj,{
    where:id
  }).then(()=>res.redirect("/"))
})

module.exports = router;