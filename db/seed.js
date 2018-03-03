const Convention = require('../models/Convention')
const seedData = require('./seeds.json')

Convention.remove({}).then(() => {
  return Convention.collection.insert((seedData))
}).then(() => { process.exit() })
