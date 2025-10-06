What is Component Lifecycle?

Every React component goes through three main phases during its existence:

Phase    	Description
Mounting	When the component is created and inserted into the DOM
Updating	When the component re-renders (due to state or prop changes)
Unmounting	When the component is removed from the DOM


index.html --> skeleton(first file load then main.jsx->app.js->app.css)
main.jsx--> entry point
App.js-->main Component
App.css /index.css styling
src /-->where we work
public /--static assets like img,logos and favicon

#Creating app with react and while creating app use arrows button select configuration for your projects.

npm create vite@latest my-app
cd my-app
npm install
npm run dev


jsx-->(javascript+html code)

function app(){}
{}->lets you insert JS expressions inside jsx.
JSX must return a single root element.

#Components

React app are built using components.
   1. Functional components (modern, with hooks)

           function welcome(props)
            {
                return <h2>hello,{props.name}!</h2>
            }

           exports default welcome;

   2. class Components (older,less use now)

       import Welcome from "./Welcome";
       
       function App()
            {
               return
                (
                  <div>
                      <Welcome name="vishal" age={25}/>
                      <Welecome name="Rahul" age ={30} />
                   </div>
               );
         }
                    
         
#Props (Passing data) 
   1. props = arguments passed to components
   2. they are read-only

   function welcome(props)
    {
       return <h2>hello,{props.name}!</h2>
    }

#State
  1. state is used to store data that can change over time in a component.
  2. when state changes, React automatically re-renders the components.
  3. Managed using the useState() hook(only inside functional components).
    import { useState } from "react";

         function Counter() {
              // declare state variable and its updater function
              const [count, setCount] = useState(0);

             return (
                  <div>
                    <h2>Count: {count}</h2>
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                 <button onClick={() => setCount(count - 1)}>Decrement</button>
                 </div>
  );
}

export default Counter;


How it works
   1. count -> current state value(Start from 0)
   2.setCount-> function to update the state
       setCount(count+1)


#Event Handling
1.FORM EVENTS

 1.onChange--when input value change
     1.onChange={handleChange}
      
      import { useState } from "react";

      function InputExample() {
            const [text, setText] = useState("");

            function handleChange(event) {
                  setText(event.target.value);
              }

            return (
                 <div>
                <input type="text" value={text} onChange={handleChange} />
                <p>You typed: {text}</p>
               </div>
             );
            }
  2.onSubmit -> when a form is submitted.
  3.onFocus -> when an element gains focus.
  4.onBlur -> when focus leaves an elements.

2.MOUSE EVENTS
  1. onClick --> Triggered when an element is clicked

   a. <button onClick={handleclick}></button>
   b. <button onClick={() => alert("Clicked!")}>Click Me</button>

  2.onDoubleClick -->	Triggered on double click
  3.onMouseEnter -->	When mouse enters an element
  4.onMouseLeave-->	When mouse leaves an element
  5.onMouseDown	-->     When mouse button is pressed
  6.onMouseUp	-->     When mouse button is released
  7.onContextMenu-->	Right-click (context menu)
  
3. keyboard Events (Used for typing or keyboard shortcuts)
   onKeyDown --> Key is pressed down
   onKeyUp -->	 Key is released.
   onKeyPress --> Key is pressed (deprecated, use onKeyDown)

4.Clipboard events
   onCopy -> user copies text
   onPaste -> user pastes text.

5. Drag & Drop Events
  onDragStart --> Start dragging an element
  onDragOver -->  While dragging over a drop zone
  onDrop -->	  When dropped

# Most commonly used in daily React development:

  1.onClick

  2.onChange

  3.onSubmit

  4.onKeyDown

  5.onFocus / onBlur

  6.onMouseEnter / onMouseLeave

#HOOKs
 1. useState -hold dynamic and chaning value for components
    
     const [count, setCount] = useState(0);

    State can be any type
     Number -->	useState(0)
     String -->	useState("Vishal")
     Boolean -->useState(false)
     Object -->	useState({ name: "Vishal", age: 25 })
       const [ user, setUser] =usetState({name:"vishal",city:"pune"});
       setUser({...user,city:"Mumbai"}); //update specific item.
       
     Array -->	useState([])
       const[fruit,setFruit] = usetState(["Apple"]);
        setFruits([...fruits,"Banana"]); //add new item

  2.useEffect --> handles side effects like api calls, timers,DOM updates.

      useEffect(()=>{
          //side effect code here
          return()=>{
              // cleanup(optional)
            };
             
          },[dependencies]);

    a. the first argument is a function tha runs your side effect.
    b. second arguments([dependencies]) controls when the effect runs.
   
        
    c. useEffect() -- Variations by Dependency Array
        Type	Syntax	When it runs	Example
          
          No dependency	useEffect(() => { ... });	After every render	Logs on every render
          Empty array	useEffect(() => { ... }, []);	Only once (on mount)	API call on page load
          With dependencies	useEffect(() => { ... }, [count]);	When count changes	Syncs when variable updates
      return ()=>{...} cleanup function(unmount or re-run cleanup)



3.useContext - share data between components(Without props)
    <App> → <Parent> → <Child> → <GrandChild>
     create a global data store(context) and access it from anywhere without passing props.
import { createContext, useContext } from "react";



//1️⃣ Create a Context

const UserContext = createContext();



// 2️⃣ Create a Provider Component

function App() {

 const user = { name: "Vishal", city: "Pune" };

  return (

   <UserContext.Provider value={user}>

     <Profile />

  </UserContext.Provider>

 );

}



// 3️⃣ Consume Context Anywhere

function Profile() {

 const user = useContext(UserContext);

 return <h3>Hello {user.name} from {user.city}</h3>;

}



export default App;


How it works
 1. UserContext = global data container.

 2.UserContext.Provider = makes data available to children

 3.useContext(UserContext) = directly access thata data anywhere.



🧩 When to Use:

Share theme, user info, auth status, language, etc., across components.
Avoid prop drilling.


#Conditonal Rendering
  {variable ? true : false}
  { isAdmin &&<button></button>}
  {userName || "Guest User"}
  {!user.isAdmin && <button>User Dashboard</button>}

#List and keys in React
 1. <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>

 2. <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - Age: {user.age}
          </li>
        ))}
      </ul>

#Controlled Components
  A controlled component is a form element whose value is controlled by React state.

Type	                    Description and 	Example
Controlled	React controls input value via useState	value={state} + onChange
Uncontrolled	DOM manages value, accessed via ref	ref={inputRef}


# Without Lifting State - Let’s say we have two input components that should show the same value, but their states are separate

# With Lifting State Up - We move the state to the common parent (App), and pass both the value and the setter as props. (to deep understand study the code of gpt).

#Props drilling :  Props Drilling means passing data (props) through multiple layers of components, even if the intermediate components don’t use that data — just to get it down to a deeply nested child.

 alternative to drilling is context and component composition.

# Component Composition : Instead of passing data through props everywhere, React allows you to compose components — i.e., pass elements or components as children.

  function Card({ children }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "8px" }}>
      {children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h3>Vishal</h3>
      <p>Backend Developer at Tata Technologies</p>
    </Card>
  );
}


#React Router : navigation between different views or pages

  npm install react-router-dom

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

Explanation
Part	                          Description
<BrowserRouter>	            Wraps your entire app and enables routing features
<Routes>	            Container for all route definitions
<Route>	                    Defines a path and which component to render
path="/"                    URL path (like /about, /contact)
element={<Home />}          Component rendered for that path
<Link>          	    Used for navigation (instead of <a> tag) — it prevents full reloads

# Route Parameters?
 import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
  <Route path="/user/:id" element={<User />} /> {/* 2️⃣ Dynamic Route */}

React Router Concepts (Important for Interviews)

   1.BrowserRouter – for web apps

   2.HashRouter – uses # in URLs (useful for older servers)

   3.Routes & Route – for mapping paths to components

   4.Link & NavLink – for navigation

   5.useNavigate – for programmatic routing

   6.useParams – for reading route parameters

  7.useLocation – for getting current URL info

  8.Nested Routes – to render components inside other routes

🔹 Summary
Hook / Technique	Purpose
React.memo	Prevents unnecessary child component re-renders
useCallback	Memoizes functions to avoid recreating them each render
useMemo	Memoizes expensive calculations or derived values

#Error Boundaries

Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire app.

#Suspense & Lazy Loading

Problem:
By default, React loads the entire app bundle at once. For large apps, this can make the initial load slow.

Solution:

React.lazy → load components only when needed

Suspense → show a fallback UI (like a loader) while the component is loading

import React, { Suspense } from "react";

// Lazy load component
const About = React.lazy(() => import("./About"));

function App() {
  return (
    <div>
      <h2>Welcome to My App</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <About />
      </Suspense>
    </div>
  );
}

export default App;


| Part           | Description                                            |
| -------------- | ------------------------------------------------------ |
| `React.lazy()` | Dynamically imports a component when needed            |
| `Suspense`     | Wraps lazy components and shows fallback while loading |
| `fallback`     | JSX to render during lazy component load               |


take things while coding in react
  1. component name first letter should be capital 
  2. wrap the multiple html tage in <div></div> 
         <h2></h2>
          <h3></h3> won't work in react.

library--> library give free hand while creating file for project but should be follow same basic rules.
  
framework-->give the standard path way to create your projects and its file structures.
# this you can return two different component in file
function user ()
{
}
export function profile(){}
export function login(){}
export default user

#variable export 
export const userkey="q342r232re";

import user,{login,proflie,userkey} from ""
**while function calling react want function definition(functionName) not function call(functionName())**

*MUltiple condition scenario*
             newcount==0?<h1>Condition 1</h1>
            :newcount==1?<h1>Condition 2</h1>
            :newcount==2?<h2>Condition 3</h2>
            :<h2>other condition</h2>


| Type      | Example                                      | Purpose                         |
| --------- | -------------------------------------------- | ------------------------------- |
| Primitive | `<Comp name="Vishal" />`                     | Display static data             |
| Object    | `<Comp user={userObj} />`                    | Send multiple values together   |
| Function  | `<Comp onClick={handleClick} />`             | Trigger parent logic from child |
| State     | `<Comp count={count} setCount={setCount} />` | Share state between components  |


**div style in component**
return (
     <div style={{color:"green",border:"1px solid",}}></div>
)