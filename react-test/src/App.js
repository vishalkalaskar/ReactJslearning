import React, { useState ,useRef,useTransition, startTransition} from "react";
import{useFormStatus} from "react-dom";
import Usercomp,{Userdetails,Userdetailstwo} from "./Usercom";
import Username from "./Username";
import Displayuser from "./Displayuser";
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
   const[age,setAge] = useState();
   const[dispalyage,setDispalyage]=useState();
   const[skill,setSkill]=useState([]);
   const[arrele,setarrele]=useState(['anil','akash','pinkee']);

   function handlechange(event){
      console.log(event.target.value,event.target.checked);
      if(event.target.checked)
      {
        setSkill([...skill,event.target.value])
      }
      else(
         setSkill([...skill.filter((item)=>item!=event.target.value)])
      )
   }
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
   function readage()
   {
    setDispalyage(age);
   }

    
  const handleForm = async () => {
  await new Promise(res => setTimeout(res, 200));
  console.log("submitting form...");
};

  //  function Customform()
  //  {
  //    const {pending} = useFormStatus();
  //    console.log("working on form..");
  //    return(
  //      <div>
  //          <input type="text"></input>
  //               <br>
  //               </br>
  //               <input type="text"></input>
  //               <br></br>
  //               <button disabled={pending}>{pending?"submiting...":"submit"}</button>
  //       </div>
  //    );
  //  }
  
   const[transpending,startTransition] = useTransition();
   const handletrans=  ()=>{
     startTransition( async  () => {
         await new Promise((res)=>setTimeout(res, 5000));
     })
   }

   const [username, setUsername] = useState("anil");
   const[data,setData] = useState({
     name:'anil',
     address:{
      city:'pune',
      country:'india'
     }
   })
   const handlenamechange = (name) =>
 {
    data.name = name;
    setData({...data});
 }
 const handlechangecity=(city)=>
 {
    data.address.city=city;
    setData({...data, address:{...data.address,city}});
 }
  
  const[userform,setUserform]=useState([
    {name:"vishal",age:26},
    {name:'anil',age:27},
    {name:'kiran',age:29}
  ])
  const handlearr=(n)=>
  {
    setarrele([...arrele,arrele[arrele.length-1]=n]);
  }
  // const handleage=(age)=>{
  //      setUserform([...userform,userform[userform.length-1].age=age])
  // }
  const handleage = (age) => {
  setUserform(prev => 
    prev.map((item, index) => 
      index === prev.length - 1 ? { ...item, age: age } : item
    )
  );
};

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
       <p>Input filed with useRef </p>
       <input type="text" ref={valueref}></input>
       <button onClick={readValue}>Read vlaue</button>
       <h4>{value}</h4> 

       <p>Input filed without useRef </p>
       <input type="text" value={age} palceholder="Enter you age" onChange={(e)=>setAge(e.target.value)}></input>
       <button onClick={readage}>read age</button>
       <h3>{dispalyage}</h3>
       <button onClick={(e)=>{setDispalyage("");setAge("")}}>clear age</button>

      
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
   
     <hr></hr>
     <p>Checkbox selection</p>
       <h5>Select your skill</h5>
        <br></br>
        <input onChange={handlechange} type="checkbox" id="java" value="java" />
        <label htmlFor="java">java</label>

         <br></br>
        <input onChange={handlechange}  type="checkbox" id="sql" value="sql" />
        <label htmlFor="sql">sql</label>
         <br></br>
        <input onChange={handlechange}  type="checkbox" id="html" value="html" />
        <label htmlFor="html">html</label>
         <br></br>
        <input onChange={handlechange}  type="checkbox" id="css" value="css" />
        <label htmlFor="css">css</label>
        <br></br>
        <br></br>
       <h3> {skill.toString()}</h3>
       <hr></hr>
       {/* <div>
          <h5>hooks</h5>
           <h6>This userFormstatus</h6>
             <form action={handleForm}>
              <Customform />
             </form>
       </div> */}
       <hr></hr>
       <div>
          <h6>userTransition</h6>
          {
            transpending ? <img style={{ width:50}} src="https://media.tenor.com/WX_LDjYUrMsAAAAi/loading.gif"></img> :null
          }
           <button disabled={transpending} onClick={handletrans}>click</button>
       </div>
       <hr></hr>
        <div>
      <h6>State Lifting Up</h6>

      {/* child updates parent's state */}
      <Username setUsername={setUsername} username={username} />

      {/* pass the actual username value to display */}
      <Displayuser username={username} />
    </div>
    <div>
      <h4>Upadting object and nested object state</h4>
        <input type="text" onChange={(e)=>handlenamechange(e.target.value)} placeholder="enter name"></input>
        <input type="text" onChange={(e)=>handlechangecity(e.target.value)} placeholder="enter city"></input>
        <h4>Name :{data.name}</h4>
        <h4>Name :{data.address.city}</h4>
         <h4>Name :{data.address.country}</h4>
    </div>
    <div>
      <h4>The Array udpate</h4>
      <input type="text" placeholder="Enter name" onChange={(e)=>handlearr(e.target.value)}></input>
      <p>{arrele.toString()}</p>
    </div>
    <hr></hr>
    <input type="text" placeholder="Enter age" onChange={(e)=>handleage(e.target.value)}></input>
     {
      userform.map((user,index)=>(
             <h4 key={index}>{user.name},{user.age}</h4>
      ))
     }
     
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