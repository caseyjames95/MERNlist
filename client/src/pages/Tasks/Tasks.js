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
    }
  }

  componentDidMount() { // When the page loads grab the data from the database and update the tasks array
    axios.get('/tasks')
      .then( ({data}) => this.setState({ tasks: data }))
  }

  render () {
    return (
      <TaskContext.Provider value={this.state}>
          <TaskForm />
          <TaskDisplay />
      </TaskContext.Provider>
    )
  }
}

export default Tasks