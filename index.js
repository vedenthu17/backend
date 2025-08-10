<<<<<<< HEAD
// console.log("Hello world")

const testbody = require("./second");
console.log(testbody)
=======

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
>>>>>>> e68d6248381cf0ebef22b9d346cac2ff527d61cb
