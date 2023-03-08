import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {

    state = {
        name: 'duc',
        age: 20,
        arrJobs: [
            {id:'1',title:'developer'},
            {id:'2',title:'tester'},
        ]
    }
    onChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleClickButton = () => {
        this.setState({name: 'ducne'})
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }
    render () {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                >
                </AddComponent>
                <div>Hello {this.state.name}</div>
                <div>
                    <button onClick={this.handleClickButton}>Click</button>
                </div>
                <ChildComponent
                    name={this.state.name}
                    arr={this.state.arrJobs}
                    deleteAJob = {this.deleteAJob}
                >
                </ChildComponent>
            </>
        )
    }
}

export default MyComponent;