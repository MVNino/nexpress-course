import React from "react";

const fetchTask = async (id) => {
  const response = await fetch(`${process.env.APP_URL}/api/tasks/${id}`);

  const { data: task } = await response.json()

  return task
};

const TaskShow = async ({ params }) => {
  const task = await fetchTask(params.id);

  return (
    <>
      <div className="text-4xl">{ task.name }</div>
    </>
  );
};

export default TaskShow;
