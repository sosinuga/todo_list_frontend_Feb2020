import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header.js";
import TaskCount from "./TaskCount/TaskCount.js";
import Task from "./Task/Task.js";
import AddNewTask from "./AddTask.js";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TaskCount />
        <div>
          <AddNewTask />
        </div>
        <div>
          {/* Passing a prop of text to each Task component */}
          <Task text="Pay Bills" urgent={true} />
          <Task text="Homework" urgent={true} />
          <Task text="Buy train tickets" urgent={false} />
          <Task text="Return books to the library" urgent={false} />
          <Task text="Do laundry" urgent={true} />
          <Task text="Call dad" urgent={true} />

        </div>
      </main>

    </div>
  );
}

export default App;