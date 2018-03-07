const Convention = require('../models/Convention')

const seedData = require('./seeds.json')

Convention.remove({}).then(() => {
  return Convention.collection.insert((seedData))
}).then(() => { process.exit() })

// const User = require('../models/User')
// const userSeedData = require('./userseeds.json')

// User.remove({}).then(() => {
//   return User.collection.insert((userSeedData))
// }).then(() => { process.exit() })
