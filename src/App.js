import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Header/Header.js";
import TaskCount from "./TaskCount/TaskCount.js";
import Task from "./Task/Task.js";
import AddNewTask from "./AddNewTask";

//Click on the complete button
//Our application needs to know this happens
//Which button was clicked?
//Update the relevant task in the state (completed = true)
function App() {

  const [tasks, setTasks] = useState([]);

  // Only run this code once, when the component first mounts
  useEffect(() => {
    // Fetch tasks from Backend (GET)
    axios.get("https://hyy7me71d3.execute-api.eu-west-1.amazonaws.com/dev/tasks")
      .then(response => {
        console.log("Success", response.data);
        setTasks(response.data);
      })
      .catch(err => {
        console.log("Error", err);
      });
    // the array would normally contain values that may change, and React would run the above code WHEN that value changes
    // "Array of dependencies"
  }, []);

  // function that deletes a task from the task array, and updates the state with the new array
  const deleteTask = (id) => {
    //Issue a DELETE request to my API via Postman
    //If that resolves, THEN I will filter my tasks on the frontend to remove the task with the given ID
    //If it rejects, I won't filter to delete from my frontend

    axios.delete(`https://hyy7me71d3.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`)
      .then(response => {
        const filteredTasks = tasks.filter(task => {
          return task.TaskId !== id;
        });
        //update the state with the new (shorter) array
        setTasks(filteredTasks);
      })

      .catch(err => {
        console.log("API Error", err);
      });
  };


  const markTaskComplete = (id) => {
    axios.put(`https://hyy7me71d3.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`, {
      Completed: false
    })
      .then((response) => {
        //create a new array of updated tasks, where the completed property of the matching task has been updated
        const completedTask = tasks.map((task) => {
          if (task.TaskId === id && task.Completed !== 1) {
            task.Completed = 1;
          } else if (task.TaskId === id && task.Completed === 1) {
            task.Completed = 0;
          }
          return task;
        });

        setTasks(completedTask);
      })
      .catch((err) => {
        console.log("Error updating Task", err);
      });
  }


  const addNewTask = (text, date, urgent) => {
    // Create a new task object based on the date passed as parameters

    axios.post("https://hyy7me71d3.execute-api.eu-west-1.amazonaws.com/dev/tasks", {
      Notes: text,
      DueDate: date,
      Urgent: urgent
    })
      .then(response => {
        const newTask = response.data;
        //Create a new array of tasks which includes this new task
        if (newTask.Notes !== "" && newTask.DueDate !== "") {
          const newTasks = [...tasks, newTask];

          // use the setTasks function to update the state
          setTasks(newTasks);
        }

      })
      .catch(err => {
        console.log("Error creating task", err);
      });

  }


  return (
    <div className="App">

      <Header />
      <main>

        <TaskCount count={tasks.length} />
        <div className="container">
          <AddNewTask addNewTaskFunc={addNewTask} />
        </div>
        <div className="container">
          {/* Passing a prop of text to each Task component */}
          {tasks.map(task => {
            return (
              <Task
                key={task.TaskId}

                markTaskCompleteFunc={markTaskComplete}
                deleteTaskFunc={deleteTask}
                text={task.Notes}
                urgent={task.Urgent}
                completed={task.Completed}
                dueDate={task.DueDate}
                id={task.TaskId}
              />

            );
          })}

        </div>
      </main>

    </div>
  );
}

export default App;