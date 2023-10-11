import { useState } from 'react';
import './App.css'
import './index.css'

function App() {
  const [tasks, setTasks] = useState([
    {id:5271, name:"Record React Lectures", completed: true},
    {id:3940, name:"Edit React Lectures", completed:false},
    {id:3020, name:'Watch Lectures', completed: false}
  ]);
  const [show, setShow] = useState(false)

function handleDelete(id){
  setTasks(tasks.filter(task => id !== task.id))
}


  return (
    <div className="App">
      <h1>Task List</h1>
      <ul>
        <button className='button' onClick={()=>setShow(!show)}>Toggle</button>
        {show && tasks.map((task, id)=>(
          <li key={id} className={task.completed ? "completed" : "incompleted"}>
            <span>{task.id} - {task.name}</span>
            <button onClick={() => handleDelete(task.id)} className='button'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
