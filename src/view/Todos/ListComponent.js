import React from "react";
import  './List.css'
import AddComponent from "./AddComponent";
class ListComponent extends  React.Component {

  handleAddNew = (event) => {
    if(!this.state.id || !this.state.title) {
      alert('missing required params')
      return;
    }
    event.preventDefault()
    console.log(">>> check", this.state)
    this.props.addNewJob({
      id: this.state.id,
      title: this.state.title
    })
    this.setState({
      id:'',
      title:''
    })
  }
  render() {

    let {listToDo} = this.props
    console.log(this.props)
    return (
      <>
        <h1>My App</h1>
          <div className="list">
            <table className="table">
              <tr>
                <th>id</th>
                <th>title</th>
                <th colSpan={2}>action</th>
              </tr>
                { listToDo && listToDo.length>0
                  && listToDo.map((item, index) => {
                    return (
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td><button className="edit">edit</button></td>
                        <td><button className="delete">delete</button></td>
                      </tr>
                    )
                  })
                }
            </table>
          </div>
      </>
    )
  }
}

export default ListComponent