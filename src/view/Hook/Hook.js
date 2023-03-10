import { useState} from "react";
import UseEffect from "./UseEffect";

function Hook() {
  const [counter, setCounter] = useState(2)
  const [info, setInfo] = useState({
    name: 'Hoang Viet Duc',
    age: 21,
    address: 'HD'
  })
  const [gift, setGift] = useState()

  const gifts = [
    '100k',
    '200k',
    '300k',
  ]

  const handle = () => {
    // setCounter(counter + 1)
    setCounter(prevState => prevState +1)
  }
  const handleInfo = () => {
    setInfo({
      ...info, phone:'0333456196'
    })
  }

  const Ramdom = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  }
  return (
    <div>
      Hoang Viet Duc {counter}
      <br/>
      Hoang Viet Duc {JSON.stringify(info)}
      <button onClick={handle}>Click</button>
      <button onClick={handleInfo}>Click</button>
      <br/>
      <h1>{gift || 'chua co phan thuong'}</h1>
      <button onClick={Ramdom}>Click</button>
      {/*<UseEffect></UseEffect>*/}
    </div>
  )

}
export default Hook