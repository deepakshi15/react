import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  //used to change the state
  let [counter,setCounter]=useState(0) //can give any default value like true,false,10,empty array,object
  //setCounter is a method which will control counter
  //not necessary to give setcounter name,it could be anything

  const addValue=()=>{
    if(counter==20){
      setCounter(counter=20)
    }
    else{
      setCounter(counter+1)
    }
  }

  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    else{
      setCounter(counter=0)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>

      <button
      onClick={addValue}>Add value{counter}</button>
      <br/>
      <button
      onClick={removeValue}>Remove value{counter}</button>

      {/* <p>footer: {counter}</p> */}
    </>
  )
}

export default App
