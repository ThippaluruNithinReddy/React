import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)

  // let counter = 15;

  const addValue = ()=>{
    if(counter>=20){
      return
    };
    setCounter(prev => prev+1)
    setCounter(prev => prev+1)
    setCounter(prev => prev+1)
    setCounter(prev => prev+1)
    console.log("clicked",counter);
  }

  const removeValue= () =>{
    if(counter<=0) return;
    setCounter(counter-1)
  }
  return (
    <>
     <h1>chai aur react</h1>
     <h2>Counter Value: {counter}</h2>

     <button 
      onClick={addValue}
      >Add Value {counter}</button>
     <br/>
     <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
