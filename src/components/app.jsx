import React, { Component } from "react";
import TaskList from "./tasklist";
import AddTask from "./addTask";

class Todo extends Component {
  state = {
    Tasks: [
      {
        name: "Task 1 name",
        description: "Task 1 description",
        completed: false
      },
      {
        name: "Task 2 name",
        description: "Task 2 description",
        completed: false
      },
      {
        name: "Task 3 name",
        description: "Task 3 description",
        completed: false
      },
      {
        name: "Task 4 name",
        description: "Task 4 description",
        completed: false
      },
      {
        name: "Task 5 name",
        description: "Task 5 description",
        completed: false
      },
      {
        name: "Task 6 name",
        description: "Task 6 description",
        completed: false
      },
      {
        name: "Task 7 name",
        description: "Task 7 description",
        completed: false
      },
      {
        name: "Task 8 name",
        description: "Task 8 description",
        completed: false
      },
      {
        name: "Task 9 name",
        description: "Task 9 description",
        completed: false
      },
      {
        name: "Task 10 name",
        description: "Task 10 description",
        completed: false
      }
    ]
  };
  render() {
    return (
      <table>
        <tbody>
          <TaskList
            taskProps={this.state.Tasks}
            onTaskComplete={this.handleTaskComplete}
            onDelete={this.handleDelete}
          />
          <AddTask onAddData={this.handleAddData} />
        </tbody>
      </table>
    );
  }

  handleTaskComplete = ev => {
    let Tasks = [...this.state.Tasks];
    Tasks[ev.currentTarget.value].completed = !Tasks[ev.currentTarget.value]
      .completed;
    this.setState({ Tasks });
  };

  handleDelete = ev => {
    let Tasks = [...this.state.Tasks];
    Tasks.splice(ev.currentTarget.value, 1);
    this.setState({ Tasks });
  };

  handleAddData = (name, desc) => {
    let Tasks = [...this.state.Tasks];
    let task = {
      name: name,
      description: desc,
      completed: false
    };
    Tasks.push(task);
    this.setState({ Tasks });
  };
}

export default Todo;
