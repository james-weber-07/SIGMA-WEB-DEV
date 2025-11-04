const express = require("express")
const app = express()
const path=require("path")
const port = 3000

app.use(express.static("public"));

index=require('./routes/main.js')
app.use('/',index)

app.get('/', (req, res) => {
  res.sendFile("views/index.html",{root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
