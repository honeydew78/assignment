require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
   res.send('apexdotcom')
})

app.get('/login',(req,res) => {
   res.send('<h1> please login  </h1>')
})

app.listen(process.env.PORT, () => {
   console.log(`Serve at https://localhost:${port}`)
})