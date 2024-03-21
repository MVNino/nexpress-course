"use client";
import React from "react";

const DeleteTask = ({ id }) => {
  const deleteTask = () => {
    fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: 'DELETE'
    });
  };

  return (
    <>
      <button
        type="button"
        className="p-3 bg-red-500 text-white shadow-md rounded-md"
        onClick={() => {
          deleteTask(id);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default DeleteTask;
