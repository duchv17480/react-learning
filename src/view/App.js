import './App.css';
import ToDo from "./Todos/ToDos";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends  React.Component {
  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <ToDo></ToDo>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            {/* Same as */}
            <ToastContainer />
          </header>
        </div>
      </>
    )
  }
}

export default App;
