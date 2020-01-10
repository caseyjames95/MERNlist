const { model, Schema } = require('mongoose')

module.exports = {
  ToDo: require('./ToDo.js')(model, Schema)
}