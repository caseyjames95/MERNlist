import React from 'react'

const TaskContext = React.createContext({
  task: '',
  assignedTo: '',
  status: '',
  tasks: [],
  taskSubmit: () => { },
  inputChange: () => { },
  getTasks: () => {}
})

export default TaskContext