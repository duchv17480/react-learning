import './App.css';
import MyComponent from './Example/MyComponent';
import ListComponent from "./Todos/ListComponent";
import React, {useState} from "react";
import AddComponent from "./Todos/AddComponent";

class App extends  React.Component {
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
            {/*<MyComponent></MyComponent>*/}
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

export default App;
