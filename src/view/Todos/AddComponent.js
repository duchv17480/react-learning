import React, {Component} from "react";
class AddComponent extends Component {

  state = {
    title:''
  }
  handleSubmit = () => {
    const add = {
      id:Math.floor(Math.random() * 100),
      title: this.state.title
    }
    console.log(add)
    this.props.addNew(add);
  }
  render() {
    let {title} = this.state
    return (
      <div className="input">
        <input type={"text"} onChange={(event) => {this.setState({title: event.target.value})}} />
        <button type={"button"} className="add" onClick={() => this.handleSubmit()}>Add</button>
      </div>
    )
  }
}

export default AddComponent