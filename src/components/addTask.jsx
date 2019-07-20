import React, { Component } from "react";

class AddTask extends Component {
  state = {};
  render() {
    return (
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
          <button onClick={this.addDataClicked}>Add</button>
        </td>
      </tr>
    );
  }

  addDataClicked = () => {
    this.props.onAddData(this.name.value, this.desc.value);
  };
}

export default AddTask;
