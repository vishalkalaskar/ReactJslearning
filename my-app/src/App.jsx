import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/header'
function App() {
  
   const name = "vishal kalaskar";
   let y = 10;
   let x = 20;
  function callmee()
  {
    return "function call";
  }

  function sum(a,b)
  {
    return a+b;
  }

  function buttonclick()
  { 
     alert("this button call");
  }
  let path="https://share.google/images/DJrigFoSVfVVlAuDo";
  return (
    <>
    <div>
      <Header></Header>
      <h1>Welcome to Hello world</h1>
      <h2>{name}</h2>
      <h2>{x+y}</h2>
      <p>{callmee()}</p>
      <p>{sum(100,10)}</p>
       <button onClick={buttonclick}>click</button>
       <img src={path}></img>
      </div>
      
    </>
  )
}

export default App
