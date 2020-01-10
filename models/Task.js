module.exports = (model, Schema) => {
  const Task = new Schema({
    item: String,
    assignedTo: String,
    status: String
  })

  Task.plugin(require('mongoose-timestamp'))
  return model('Task', Task)
}