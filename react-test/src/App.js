import React, { useState ,useRef} from "react";
import Usercomp,{Userdetails,Userdetailstwo} from "./Usercom";
function App() {
  const [Taskarr, setTaskarr] = useState([]);
  const [taskname, setTaskname] = useState("");
  const[remove,setRemove]=useState(false);
  const valueref=useRef(null);
  const [value,setValue]=useState();
  const[colorvalue,setColorvalue]=useState('red');
  const[fruit,setFruit] = useState("Apple");
  const[count,setCount] = useState(0);
  const[display,setDisplay] = useState(true);
   const[displaycom,setDisplaycom] = useState(true);
   const[mulcount,setMulcount] = useState(0);
   const userobj={
    name :'vishal',
    age : 20,
   }
   const userobjtwo={
     name :'anil',
    age : 25,
   }
 
  function AddTask() {
     if (taskname.trim() === "") {
    return;   // stop function → do NOT add empty task
  }
    setTaskarr((pre) => [...pre, taskname]);
    setTaskname(""); // clear input
    setRemove(true);
  }
  function removefunction()
  {
    setTaskarr((prev)=>prev.slice(0,-1));
  }

  function readValue()
  {
    const value= valueref.current.value;
    setValue(value);
  }
//   function showColor(e) {
//   setColorvalue(e.target.value);   // set the color string
// }
  function sum(a,b)
  {
    return a+b;
  }

  function operation(a,b,op)
  {
    if(op=="+")
    {
      return a+b;
    }
    else if(op=="-")
    {
      return a-b;
    }
    else if(op=="*")
    {
      return a*b;
    }
    else{
      return "invalid";
    }
  }
   function changefruit()
   {
    setFruit("Banna");
   }
  
  return (
    <div>
      <h1>To do list app</h1>

      <input
        type="text"
        placeholder="Enter task Name"
        value={taskname}
        onChange={(e) => setTaskname(e.target.value)}
      />

      <button onClick={AddTask}>Add Task</button>

      <ul>
        {Taskarr.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
       {Taskarr.length>0&&<button onClick={removefunction}>Remove</button>}
       <hr></hr>
       <input type="text" ref={valueref}></input>
       <button onClick={readValue}>Read vlaue</button>
       <h4>{value}</h4> 

       <hr></hr>
       <div style={{backgroundColor:colorvalue}}>
       <p>color dropdown</p>
       {/* <select defaultValue="" onChange={showColor}> */}
        <select defaultValue="" onChange={(e)=>setColorvalue(e.target.value)}>
        <option value="red">red</option>
        <option value="yellow">yellow</option>
        <option value="green">green</option>
       </select>
     </div>
     <p>function calling</p>
     <p>{sum(10,20)}</p>
     <p>{operation(25,25,"+")}</p>
     <hr></hr>
     <p>State example</p>
     <h3>{fruit}</h3>
     <button onClick={changefruit}>change fruit</button>
     <h3>Counter : {count}</h3>
     <button onClick={()=>setCount(count+1)}>increase count</button>
     <hr></hr>
     <h4>Toggle</h4>
       {display?<h1>Hey Vishal</h1>: null}
        <button onClick={()=>setDisplay(!display)}>Toggle</button>

      <p>this for component toggle</p>
       {displaycom?<Usercomp />: null}
       <button onClick={()=>setDisplaycom(!displaycom)}>Toggle comp</button>
      
     <p>Multiple if else condition</p>
     <h3>Multiple counter :{mulcount}</h3>
     {mulcount<5&&(
        <button onClick={()=>setMulcount(mulcount+1)}>counter</button>
     )}
  
     {
         mulcount==0?<h3>condition 0</h3>
        :mulcount==1?<h3>condition 1</h3>
        :mulcount==2?<h3>condition 2</h3>
        :mulcount==3?<h3>condition 3</h3>
        :mulcount==4?<h3>condition 4</h3>
        :<h2>other condition</h2>
     }

     <hr></hr>
    <p>Props </p>
    <Userdetails userobj={userobj} />
    <p>Props without </p>
    <Userdetailstwo userobj={userobjtwo} />


    </div>
  );
}
export function Apple()
{

  return(
     <div>
     <h1>this is apple</h1>
   </div>
  )
}

export function Mango(){
  return(
    <div>
     <h1>this is mango</h1>
    </div> 
  )
}
export  const UserKey = "!@@#$$%$%#$";
export default App;