import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Rahul",
    age: 23
  }

  return (
    <>
      <h1 className='bg-green-400'>Tailwind CSS</h1>
      <Card channelName="chai_aur_code" someObj = {myObj} user="Rahul Rajput" designation="Sofftware Engineer"/>
</>
  )
}

export default App
