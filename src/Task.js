import React from "react";

function Task(props) {
    // props ={text: "Do the dishes"}
    return (
        <p>{props.text} - {props.urgent } 
        </p>
    )
}

export default Task;