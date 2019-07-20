import React, { Component } from "react";

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
          <tr>
            <th>NAME</th>
            <th>Description</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
          {this.state.Tasks.map((task, index) => {
            return (
              <tr key={index}>
                <td>{task.name}</td>
                <td> {task.description}</td>
                <td>
                  <button value={index} onClick={this.handleTaskComplete}>
                    {task.completed ? (
                      <div> Completed </div>
                    ) : (
                      <div> Not Completed </div>
                    )}
                  </button>
                </td>
                <td>
                  <button value={index} onClick={this.handleDelete}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>
              <input
                type="text"
                ref={name => (this.name = name)}
                placeholder="Enter Task Name"
              />
            </td>
            <td>
              <input
                type="text"
                ref={desc => (this.desc = desc)}
                placeholder="Enter Task Description"
              />
            </td>
            <td>
              <button onClick={this.handleAddData}>Add</button>
            </td>
          </tr>
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

  handleAddData = () => {
    let Tasks = [...this.state.Tasks];
    let task = {
      name: this.name.value,
      description: this.desc.value,
      completed: false
    };
    Tasks.push(task);
    this.name.value = "";
    this.desc.value = "";
    this.setState({ Tasks });
  };
}

export default Todo;
