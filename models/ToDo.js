module.exports = (model, Schema) => {
  const ToDo = new Schema({
    item: String
  })

  return model('ToDo', ToDo)
}