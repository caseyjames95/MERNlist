import React from 'react'
import axios from 'axios'
import TaskContext from '../../utils/TaskContext'
import TaskForm from '../../components/TaskForm'
import TaskDisplay from '../../components/TaskDisplay'

const Tasks = () => {

  const [taskState, setTaskState] = React.useState({
    task: '',
    assignedTo: '',
    status: '',
    tasks: []
  })
  taskState.inputChange = e => {
    setTaskState({ ...taskState, [e.target.name]: e.target.value })
  }

  taskState.taskSubmit = e => {
    e.preventDefault()
    axios.post(`/task`, {
      task: taskState.task,
      assignedTo: taskState.assignedTo,
      status: taskState.status
    })
      .then(({ data }) => {
        let tasks = JSON.parse(JSON.stringify(taskState.tasks))
        tasks.push(data)
        setTaskState({ ...taskState, tasks, task: '', assignedTo: '', status: '' })
      })
  }

  React.useEffect(() => {
    axios.get('/tasks')
      .then(({ data }) => {
        setTaskState({ ...taskState, tasks: data })
      })
      .catch(e => console.error(e))
  }, [])

  return (
    <TaskContext.Provider value={taskState}>
      <div className="container">
        <TaskForm />
        <TaskDisplay />
      </div>
    </TaskContext.Provider>
  )
}

export default Tasks