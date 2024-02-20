import './App.css';
import { IoAdd } from "react-icons/io5";
import { RiTodoLine } from "react-icons/ri";
import { MdDone, MdDelete  } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import { useState, useEffect } from 'react';


function App() {

//  the function getCurrentDate() 
const getCurrentDate = () => {
  const today = new Date();
  const currentdate = today.getDate() +"/" + (today.getMonth()+1) +"/"+ today.getFullYear(); 
  return currentdate; 
  };



// Hook
const [tasks, setTasks] = useState(() => {
  // Read tasks from local storage on component mount
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks): [];
});

useEffect(() => {
  // Write tasks to local storage whenever tasks change
  localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);
  



// How to ADD a new Task 
const AddTask = () => {
  const newTask = prompt('Enter the title of the new task:');
  if (newTask) {
    const newTaskObject = {
      title: newTask,
      date:  getCurrentDate(),
      isDone: false
    };
    setTasks(prevTasks => [...prevTasks, newTaskObject]);
  }
};




// How to Delete a Task
const DeleteTask = (index) => {

// Ask the user for confirmation
const task = tasks[index]; 
const userConfirmed = window.confirm("Are you sure to delete the task: " + task.title + "?");

  // If the user confirmed, proceed with deletion
  if (userConfirmed) {
      // Create a copy of the tasks array
      const Copy = [...tasks];
      
      // Remove the task at the specified index
      Copy.splice(index, 1);

      // Update the state with the new tasks array
      setTasks(Copy);}
};




// How to Update a Task
const UpdateTask = (index) => {

const newTitle = prompt ("Please enter a new title of the task titled ", tasks[index].title );
if (newTitle) {

  // Create a copy of the tasks array
  const copy = [...tasks];

  copy[index] = { ...copy[index], title: newTitle };
  
  // Update the state with the new tasks array
  setTasks(copy);
}
};



// A Complete and Uncompelte Task 
const ToggleTaskCompetion = (index) => {
  const ToggleTask = [...tasks];
  ToggleTask[index] = { ...ToggleTask[index], isDone : !ToggleTask[index].isDone};
  setTasks(ToggleTask);

}



// How to Read a Task
const taskShow = tasks.map((e,index)=>{
  const task = tasks[index]; 
  return    <div id='task' style={{ backgroundColor: task.isDone ? 'rgb(94, 242, 94)': ''}}>
                  <div id='todo'> 
                       <div id='title'> {e.title} </div>
                       <div id='date'>
                            <h5> <RiTodoLine /> </h5>
                             <p> {e.date} </p>
                       </div>
                  </div>
  
                  <div id='icons'>
                  <button id='done' style={{ backgroundColor: task.isDone ? 'black': ''}}onClick={()=>ToggleTaskCompetion(index)}> <MdDone /></button>
                  <button id='update'onClick={()=>UpdateTask(index)}> <FaRegPenToSquare /></button>
                  <button id='delete' onClick={() => DeleteTask(index)}> <MdDelete /></button>
                  </div>
            </div>
    })



return (  
<>
<div className="section">
 
      <div className="App-container">
           
            <div id='header'>
            <h2> My To Do List </h2>
            <button id='add' onClick={AddTask}> <IoAdd /> </button>
            </div>
             
            <div id='tasks'>
              {taskShow}
            </div>
      
      </div>

 </div>
<div>

</div>
</>
  );
}
export default App;
