const { ToDo } = require('../models')

module.exports = app => {
  app.post('/items', (req, res) =>{
    ToDo.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
  })
  app.get('/items', (req, res) => {
    ToDo.find()
    .then(items => res.json(items))
    .catch(e => console.error(e))
  })
}