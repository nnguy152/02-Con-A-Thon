const express = require('express')
const hbs = require('hbs')
const parser = require('body-parser')
const conController = require('./controllers/convention')

const app = express()
app.set('view engine', 'hbs')
app.use(parser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index')
  res.redirect('/conventions')
})

app.use('/conventions', conController)

app.listen(3000, console.log('listening'))
