const express=require("express")
const router=express.Router()
const path = require("path");

router.get('/learn', (req, res) => {
  res.sendFile(path.join(__dirname,"../views/learn.html"))
})
router.get('/loginpage', (req, res) => {
  res.sendFile(path.join(__dirname,"../views/loginpage.html"))
})
router.get('/planets', (req, res) => {
  res.sendFile(path.join(__dirname,"../views/planets.html"))
})
module.exports=router