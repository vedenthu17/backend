
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{

    res.send("Hello twitter")
})
app.get('/login',(req,res)=>{
    res.send('<h1>PLease login  at us </h1>')
})

app.get('/home',(req,res)=>{

    res.send('<h2>Ghar pr  swagat hai</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})