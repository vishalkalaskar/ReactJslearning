import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User, { Userdata,Userdatatwo,Wrapper} from './User';

function App() {
 

  const [count, setCount] = useState(0);
  const [display,setDisplay] = useState(true);
  const[comp,setComp]= useState(true);
  const[newcount,setNewcount] = useState(0);
  const fruits=(name)=>
  {
     alert("name "+name);
  }

   const Userobj={name:"vishal",age:29,email:"vishal@gmail.com"};
  const Userobjtwo={name:"anil",age:29,email:"anil@gmail.com"};
   
  const[val,setVal]=useState(" ");
  return (
    <>
      <div>
        <h1>hello word</h1>
        <button onClick={()=>fruits("Apple")}>Apple</button>
        <button onClick={()=>fruits("Banna")}>Banna</button>
      </div>

     <div>
         <h1>{count}</h1>
         <button onClick={()=>setCount(count+1)}>increase</button>
         <button onClick={()=>setCount(count-1)}>decrease</button>
     </div>
     <div>
       
        <p>Toggle feature</p>
        {display ? <h1>hey vishal</h1> : null}
        <button onClick={()=>setDisplay(!display)}>Toggle</button>

        <p>Component hide and show</p>
        {comp ? <User></User> :null}
         <button onClick={()=>setComp(!comp)}>Toggle Component</button>
     </div>
     <div>
          <h6>multiple condition of else if</h6>
          <button onClick={()=>setNewcount(newcount+1)}>Counter</button>
          {
            newcount==0?<h1>Condition 1</h1>
            :newcount==1?<h1>Condition 2</h1>
            :newcount==2?<h2>Condition 3</h2>
            :<h2>other condition</h2>
          }

     </div>
     <div>
        <h2>userData Component</h2>
        {/* <Userdata name={"vishal"}></Userdata> */}
        {/* <Userdata userobj={Userobj}></Userdata> */}
         <Userdata userobj={Userobj} />
         <hr></hr>
         <Userdatatwo userobjtwo={Userobjtwo}/>
     </div>
     <Wrapper/>
     <div>
         <h1>reading input filed value</h1>
         {/* <input type="text" placeholder='Enter User Name' onChange={(event)=>alert(event.target.value)}></input>
     </div> */}
      <input type="text" value={val} placeholder='Enter User Name' onChange={(event)=>setVal(event.target.value)}></input>
      <h1>{val}</h1>

      <button onClick={()=>setVal(" ")}>clear filed</button>
     </div>
    </>

  )
}

export default App
