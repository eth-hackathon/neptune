const express = require('express')
const cors = require("cors");
const app = express()
const port = 8080

// middlewares
app.use(cors())

const myLogger = function (req, res, next) {
  console.log('LOGGED', req.url)
  next()
}

app.use(myLogger)

app.get('/api/example', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
