const express = require('express')
const hbs = require('hbs')
const parser = require('body-parser')

const app = express()
app.set('view engine', 'hbs')
app.use(parser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('hi')
})

app.listen(3000, console.log('listening'))
