import React, { useState } from "react";

function AddNewTask(props) {
    const [taskText, setTaskText] = useState("");
    const [date, setDate] = useState("2020-04-05")
    const [urgent, setUrgent] = useState(false);

    const handleTextChange = (event) => {
        setTaskText(event.target.value);
    }

    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    const handleUrgentChange = (event) => {
        setUrgent(event.target.checked);

    }
    const handleAddTask = () => {
        if (taskText === "") {
            alert("Add a Task")
        } else if (date === "") {
            alert("Select a date")
        } else {
            props.addNewTaskFunc(taskText, date, urgent);
            setTaskText("");
        }
    }

    return (

        <div className="row m-1">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <input type="text" className="form-control" value={taskText} onChange={handleTextChange} />
            </div>
            <div className="col--10 col-sm-5 col-md-3 col-lg-2">
                <input type="date" className="form-control" value={date} onChange={handleDateChange} />
            </div>
            <div className="col-2">
                <input type="checkbox" className="form-check-input" id="urgentCheck" checked={urgent} onChange={handleUrgentChange} />
                <label className="form-check-label" htmlFor="urgentCheck">
                    Urgent
        </label>
            </div>
            <div className="col-12 col-sm-2 col-md-1 col-lg-2">
                <button className="btn btn-primary" onClick={handleAddTask}>Add</button>
            </div>
        </div>
    );
}

export default AddNewTask;