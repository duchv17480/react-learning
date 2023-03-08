import React from "react";

class ChildComponent extends React.Component {
    state = {
        showJob: false
    }

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }
    handleOnClickDelete = (job) => {
        this.props.deleteAJob(job)
    }

    render() {
        let { name, arr } = this.props;
        let { showJob } = this.state;
        return (
            <>
                {showJob === false &&
                    <>
                        <div>
                            <button onClick={() => this.handleShowHide()}>show</button>
                        </div>
                    </>
                }
                {showJob === true &&
                    <>
                        <button onClick={() => this.handleShowHide()}>hide</button>
                        <div>
                            {
                                arr && arr.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            Outputting Lists : {item.id} - {item.title}
                                            <span onClick={() => this.handleOnClickDelete(item)}>&nbsp; X</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                }
            </>
        )
    }
}
// const ChildComponent = (props) => {
//     let { name, arr } = props
//     return (
//         <>
//             <div>Cha qua con:{name}</div>
//             <div>
//                 {
//                     arr && arr.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 Outputting Lists : {item.id} - {item.title}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }
export default ChildComponent;