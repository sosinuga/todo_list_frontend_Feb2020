import React from "react";
import moment from "moment";
import "./Task.css";

const Task = (props) => {

  // props = { text: "Do the dishes", urgent: true, completed: true, dueDate: "2020-03-10", id: 2. deleteTaskFunc: fn() }
  const handleClick = () => {

    props.deleteTaskFunc(props.id);
  }

  const handleCompleteClick = () => {

    props.markTaskCompleteFunc(props.id);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="task col-12 col-md-3 col-lg-5">{props.text}
        </div>
        <div className="col-4 col-md-2 col-lg-2">{props.urgent === 1 ? "Urgent" : ""}
        </div>
        <div className="date col-4 col-md-2 col-lg-2">{"Due by "}{moment(props.dueDate).format('ddd Do MMMM YYYY')}
        </div>
        <div className="col-4 col-md-2 col-lg-2">
          <div onClick={handleCompleteClick}>
            {props.completed === 1 ? (<button className="btn btn-primary">Complete</button>)
              : (<button className="btn btn-primary">Pending</button>)}
          </div>
        </div>
        <div className="col-12 col-md-1 col-lg-1">

          <button className="btn btn-danger" onClick={handleClick}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Task;