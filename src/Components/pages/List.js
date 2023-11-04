import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";
import "../../assets/css/list.css";

const List = ({ items, removeItem, editItem, onToggleComplete }) => {
  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>Task Completed</th>
          <th>Priority</th>
          <th>Task Title</th>
          <th>Due Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          const { id, title, dueDate, completed, priority } = item;

          return (
            <tr key={id}>
              <td>
                <button
                  className="toggle-complete-btn"
                  onClick={() => onToggleComplete(id)}
                >
                  {completed ? "Completed" : "Active"}
                </button>
              </td>
              <td>{priority}</td>
              <td className={completed ? "completed-title" : ""}>{title}</td>
              <td>{dueDate || "N/A"}</td>
              <td>
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => editItem(id)}
                >
                  <FaEdit />
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => removeItem(id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List