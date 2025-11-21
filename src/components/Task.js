import React from "react";

function Task({ task, text, category, onDelete }) {
  // Handle both ways the props might be passed
  const taskText = task ? task.text : text;
  const taskCategory = task ? task.category : category;
  const taskId = task ? task.id : Date.now(); // fallback ID

  const handleDelete = () => {
    if (onDelete) {
      onDelete(taskId);
    }
  };

  return (
    <div className="task">
      <div className="label">{taskCategory}</div>
      <div className="text">{taskText}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;