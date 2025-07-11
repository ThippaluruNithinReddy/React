import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: 'nithin',
    age: 25,
    city: 'bangalore'
  }
  let newArray = [1, 2, 3, 4, 5]
  return (
    <>
        <h1 className='bg-green-400 p-4 rounded-xl'>hello world</h1>
        <Card username='nithin'/>
        <Card username='puppy'/>
    </>
  )
}

export default App
