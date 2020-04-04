import React, { useState } from "react";
import "./App.css";
import Header from "./Header/Header.js";
import TaskCount from "./TaskCount/TaskCount.js";
import Task from "./Task/Task.js";
import AddNewTask from "./AddNewTask";



function App() {


  const [tasks, setTasks] = useState([
    {
      text: "Pay Bills",
      completed: true,
      dueDate: "2020-03-31",
      urgent: true,
      id: 1
    },
    {
      text: "Homework",
      completed: false,
      dueDate: "2020-03-31",
      urgent: true,
      id: 2
    },
    {
      text: "Buy train tickets",
      completed: true,
      dueDate: "2020-04-06",
      urgent: false,
      id: 3
    },
    {
      text: "Return books to the library",
      completed: false,
      dueDate: "2020-04-02",
      urgent: false,
      id: 4
    },
    {
      text: "Do laundry",
      completed: true,
      dueDate: "2020-03-30",
      urgent: true,
      id: 5
    },
    {
      text: "Call dad",
      completed: true,
      dueDate: "2020-04-02",
      urgent: false,
      id: 6
    }
  ]);
  // function that deletes a task from the task array, and updates the state with the new array
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => {
if (task.id === id) {
  return false;
} else{
  return true;
}
    });

    setTasks(filteredTasks);
  }
  return (
    <div className="App">

      <Header />
      <main>

        <TaskCount count={tasks.length} />
        <div className="container">
          <AddNewTask />
          {/* Passing a prop of text to each Task component */}
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}

                deleteTaskFunc={deleteTask}
                text={task.text}
                urgent={task.urgent}
                completed={task.completed}
                dueDate={task.dueDate}
                id={task.id}
              />
            );
          })}

        </div>
      </main>

    </div>
  );
}

export default App;