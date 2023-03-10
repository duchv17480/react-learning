import React from "react";
import  './List.css'
import { toast } from 'react-toastify';
class ListComponent extends  React.Component {
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