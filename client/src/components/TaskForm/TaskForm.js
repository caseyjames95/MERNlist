import React from 'react'
import TaskContext from '../../utils/TaskContext'
import { Button, Form, Label, Input } from 'reactstrap'

const TaskForm = () => {

  const { task, assignedTo, status, taskSubmit, inputChange } = React.useContext(TaskContext)

  return (
    <Form>
      <Label htmlFor="task">Input Task</Label>
      <Input type="text" placeholder="Insert a task here" name="task" onChange={inputChange} value={task}/>
      <Label htmlFor="assignedTo">Assigned To:</Label>
      <Input type="text" placeholder="Who is it assiged to?" name="assignedTo" onChange={inputChange} value={assignedTo}/>
      <Label htmlFor="status">Status</Label>
      <Input type="text" placeholder="What's the status?" name="status" onChange={inputChange} value={status}/>
      <Button id="submit" className="btn" color="primary" onClick={taskSubmit}>Add Task</Button>
    </Form>
  )
}

export default TaskForm