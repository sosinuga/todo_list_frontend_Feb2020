import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header.js";
import TaskCount from "./TaskCount/TaskCount.js";
import Task from "./Task/Task.js";
import AddNewTask from "./AddTask.js";



function App() {
  // const [counter, setCounter] = useState(0);

  //   function increaseCounterBy1() {
  //     setCounter(counter + 1);
  //   }
  //   function decreaseCounterBy1() {
  //     if(counter >0){
  //     setCounter(counter - 1);
  //   }
  // }

  const [tasks, setTasks] = useState([
    {
      text: "Pay Bills",
      completed: true,
      dueDate: "2020-03-31",
      urgent: true
    },
    {
      text: "Homework",
      completed: false,
      dueDate: "2020-03-31",
      urgent: true
    },
    {
      text: "Buy train tickets",
      completed: true,
      dueDate: "2020-04-06",
      urgent: false
    },
    {
      text: "Return books to the library",
      completed: false,
      dueDate: "2020-04-02",
      urgent: false
    },
    {
      text: "Do laundry",
      completed: true,
      dueDate: "2020-03-30",
      urgent: true
    },
    {
      text: "Call dad",
      completed: true,
      dueDate: "2020-04-02",
      urgent: false
    }
  ]);

  return (
    <div className="App">

      <Header />
      <main>

        <TaskCount count={tasks.length} />
        <div className="container">
          {/* Passing a prop of text to each Task component */}
          {tasks.map((task) => {
            return (
            <Task 
            text={task.text} 
            urgent={task.urgent} 
            completed={task.completed} 
            dueDate={task.dueDate}
            />
            );
          })}

        </div>
      </main>

    </div>
  );
}

export default App;