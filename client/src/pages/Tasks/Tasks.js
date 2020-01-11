import React from 'react'
import axios from 'axios'
import TaskContext from '../../utils/TaskContext'
import TaskForm from '../../components/TaskForm'
import TaskDisplay from '../../components/TaskDisplay'

class Tasks extends React.Component {
  state = {
    task: '',
    assignedTo: '',
    status: '',
    tasks: [],
    inputChange: e => {
      this.setState({ [e.target.name]: e.target.value })
    },
    taskSubmit: e => {
      e.preventDefault()
      //this.setState({ [e.target.name]: e.target.value })
      axios.post(`/task`, {
        task: this.state.task,
        assignedTo: this.state.assignedTo,
        status: this.state.status
      })
        .then( ({data}) => {
          let arr = JSON.parse(JSON.stringify(this.state.tasks))
          arr.push(data)
          this.setState({ tasks: arr, task: '', assignedTo: '', status: ''  })
        })
    },
    getTasks: () => {
      console.log('running getTasks')
      axios.get('/tasks')
        .then( ({data}) => {
          let arr = JSON.parse(JSON.stringify(this.state.tasks))
          arr = data
          this.setState({ tasks: arr})
        })
    }
  }

  render () {
    return (
      <TaskContext.Provider value={this.state}>
        <div className="container">
          <TaskForm />
          <TaskDisplay />
        </div>
      </TaskContext.Provider>
    )
  }
}

export default Tasks