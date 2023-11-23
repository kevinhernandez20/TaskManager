import logo from './ss.svg';
import './App.css';
import TaskList from './TaskList';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    setTasks([...tasks, { id: tasks.length + 1, text: newTask }]);
    setNewTask('');
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <img src={logo} alt="Logo" width="450" height="450" />

        <h1>Task Manager</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tasks">View Tasks</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/tasks" component={TaskList} />
          <Route
            path="/"
            render={() => (
              <div>
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
            )}
            exact
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
