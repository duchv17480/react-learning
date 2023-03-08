import React from "react";

class AddComponent extends React.Component {
    state = {
        id: '',
        title: ''
    }

    onChangeId = (event) => {
        this.setState({
            id: event.target.value
        })
    }
    onChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleSubmit = (event) => {
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
        return (
            <form>
                <input value={this.state.id} type="text" name="id"
                    onChange={(event) => this.onChangeId(event)}>
                </input>
                <hr></hr>
                <input value={this.state.title} type="text" name="title"
                    onChange={(event) => this.onChangeTitle(event)}>
                </input>
                <hr></hr>
                <input type="submit" onClick={(event) => this.handleSubmit(event)}></input>
            </form>
        )
    }

}
export default AddComponent