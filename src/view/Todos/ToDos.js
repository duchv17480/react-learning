import ListComponent from "./ListComponent";
import React from "react";
import AddComponent from "./AddComponent";

class Todo extends  React.Component {
  state = {
    listToDo: [
      {id: '1', title: 'hello'},
      {id: '2', title: 'hello 2'},
      {id: '3', title: 'hello 3'}
    ]
  }
  AddNew = (add) => {
    this.setState({
      listToDo: [...this.state.listToDo, add]
    })
  }
  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <AddComponent addNew={this.AddNew}></AddComponent>
            <ListComponent
              listToDo={this.state.listToDo}
              addNew = {this.AddNew}
            >
            </ListComponent>
          </header>
        </div>
      </>
    )
  }
}

export default Todo;
