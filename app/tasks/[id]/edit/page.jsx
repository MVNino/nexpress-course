"use client";
import React, { useEffect, useState } from "react";

const EditPost = ({ params: { id } }) => {
  const [isError, setIsError] = useState();
  const [task, setTask] = useState({});

  const fetchTask = (id) => {
    const response = fetch(`http://localhost:3000/api/tasks/${id}`)
      .then((res) => res.json())
      .then(({ data: taskData }) => {
        setTask(taskData);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchTask(id);
  }, []);

  const updateTask = ({ name, description }) => {
    fetch(`http://localhost:3000/api/taskss/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description }),
    });
  };

  return (
    <>
      <h3>EditPost</h3>
      {isError ? (
        <p className="container mx-5 text-center p-2 bg-red-400 text-white">
          Error!
        </p>
      ) : (
        <></>
      )}
      {task ? (
        <div className="container flex justify-center">
          <input
            type="text"
            name="name"
            id="name"
            className="text-black shadow-md p-2"
            value={task.name}
            onChange={(e) => {
              console.log("E value ; ", e.target.value);
              setTask({
                ...task,
                name: e.target.value,
              });
            }}
            placeholder="Enter name here."
          />
          <br />
          <input
            type="text"
            name="description"
            id="description"
            className="text-black shadow-md p-2"
            value={task.description || ""}
            onChange={(e) => {
              console.log("E value ; ", e.target.value);
              setTask({
                ...task,
                description: e.target.value,
              });
            }}
            placeholder="Enter description here."
          />

          <button
            type="button"
            onClick={() => {
              updateTask({
                name: task.name,
                description: task.description,
              });
            }}
            className="bg-white text-black shadow-md p-3"
          >
            Submit
          </button>
        </div>
      ) : (
        <>N/A</>
      )}
    </>
  );
};

export default EditPost;
