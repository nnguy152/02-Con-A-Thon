const express = require('express')
// const flash = require('connect-flash')
const hbs = require('hbs')
const methodOverride = require('method-override')
const parser = require('body-parser')
// const passport = require('passport')
// const session = require('express-session')

const conController = require('./controllers/convention')

const app = express()
app.set('view engine', 'hbs')
app.use(parser.urlencoded({extended: true}))
app.use(methodOverride('_method'))
// app.use(flash())

// require('./config/passport')(passport)
// app.use(passport.initialize())
// app.use(passport.session())
// app.use(session({
//   secret: 'O_O',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }))

app.get('/', (req, res) => {
  res.render('index')
  res.redirect('/conventions')
})

app.use(function (req, res, next) {
  res.locals.currentUser = req.user
  next()
})

app.use('/conventions', conController)

// app.set('port', process.env.PORT || 3000)

// app.listen(app.get('port'), () => {
//   console.log(`✅ PORT: ${app.get('port')} 🌟`)
// })
app.listen(3000, console.log('got it'))
