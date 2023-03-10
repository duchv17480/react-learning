import {useState, useRef} from "react";

function UseRef() {
    const [count, setCount] = useState(60)
    const timerId = useRef()

    const start = () => {
        timerId.current = setInterval(() => {
            setCount(prevState => prevState - 1)
        }, 1000)
    }
    const stop = () => {
        clearInterval(timerId.current)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
        </div>
    )
}

export default UseRef