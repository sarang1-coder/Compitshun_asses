import React from "react";
import "../../assets/css/modal.css";



const AddTodoModal = ({
  show,
  onClose,
  onSubmit,
  name,
  dueDate,
  priority,
  onNameChange,
  onDueDateChange,
  onPriorityChange
}) => {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          <b>&times;</b>
        </span>
        <h2>Add Todo</h2>
        <form onSubmit={onSubmit}>
          {/* Todo */}
          <label htmlFor="name">Todo Name:</label>
          <input type="text" id="name" value={name} onChange={onNameChange} />
          <br />

          {/* Setting Due Date */}
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={onDueDateChange}
          />
          <br />

          {/* Setting Priority */}
          <label for="priority">Select Priority:</label>
          <select
            value={priority}
            onChange={onPriorityChange}
            id="priority"
            name="priority"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <button className="submit-btn">Add</button>
        </form>
      </div>
    </div>
  );
};


export default AddTodoModal;