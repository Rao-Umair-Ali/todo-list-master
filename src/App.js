import { useState } from 'react';
import './App.css';




function App() {
const [todolist,settodolist]=useState([]);
const [newtask,settask]=useState("");
const handlechange=(event)=>{
settask(event.target.value)

}
const adds=()=>{

  settodolist([...todolist,newtask])
}

const deletetask=(taskname)=>{
  const newtodolist=todolist.filter((task)=>{
   return task!==taskname;

  });

  settodolist(newtodolist);
}

  return (
    <div className="App">
     <div> <input onChange={handlechange}></input>
      <button onClick={adds}>Add</button>

      </div>
      <div>{todolist.map((task)=>{

        return <div>
          <h2>{task}</h2>
          <button onClick={()=>deletetask(task)}>X</button>
          
          </div>;
      })}</div>
    </div>
  );
}

export default App;
