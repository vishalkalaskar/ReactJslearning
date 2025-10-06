import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const fruits=(name)=>
  {
     alert("name "+name);
  }
   
  return (
    <>
      <div>
        <h1>hello word</h1>
        <button onClick={()=>fruits("Apple")}>Apple</button>
        <button onClick={()=>fruits("Banna")}>Banna</button>
      </div>
    </>
  )
}

export default App
