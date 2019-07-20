import React, { Component } from "react";

class TaskList extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {this.props.taskProps.map((task, index) => {
          return (
            <tr key={index}>
              <td>{task.name}</td>
              <td> {task.description}</td>
              <td>
                <button value={index} onClick={this.props.onTaskComplete}>
                  {task.completed ? (
                    <div> Completed </div>
                  ) : (
                    <div> Not Completed </div>
                  )}
                </button>
              </td>
              <td>
                <button value={index} onClick={this.props.onDelete}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </React.Fragment>
    );
  }
}

export default TaskList;
