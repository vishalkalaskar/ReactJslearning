import React, { useState ,useRef} from "react";

function App() {
  const [Taskarr, setTaskarr] = useState([]);
  const [taskname, setTaskname] = useState("");
  const[remove,setRemove]=useState(false);
  const valueref=useRef(null);
  const [value,setValue]=useState();
  const[colorvalue,setColorvalue]=useState('red');

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
    </div>
  );
}

export default App;