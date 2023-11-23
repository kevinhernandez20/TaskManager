import logo from './ss.svg';
import './App.css';

import React , {useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () =>{
    setTasks([...tasks, {id: tasks.length + 1, text: newTask}]);
    setNewTask('');
  };

  return (
    <div>
          <img src = {logo} alt = "Logo" width ="450" height = "450" />{/*Use imported logo*/}

    <h1>Task Manager</h1>
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
    <input
      type="text"
      placeholder="New task"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
    />
    <button onClick={handleAddTask}>Add Task</button>
  </div>
  );
}

export default App;
