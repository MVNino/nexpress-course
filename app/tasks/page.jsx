import React from "react";
import Link from "next/link";
import DeleteTask from "@/components/DeleteTask";

const fetchTasks = async () => {
  const response = await fetch(`${process.env.APP_URL}/api/tasks`);

  const data = await response.json();

  return data;
};

const TasksList = async () => {
  const tasks = (await fetchTasks()) || [];

  return (
    <>
      <h3 className="text-2xl text-center my-5">TASKS LIST</h3>

      <div className="flex justify-around space-x-5 text-black mx-5 px-5">
        {tasks.length ? (
          tasks.map((task) => (
            <div key={task.id} className="shadow-md rounded-md p-4 w-32s">
              <h3 className="text-xl text-center">{task.name}</h3>
              <p>
                {task.description ||
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, non?"}
              </p>
              <div className="flex justify-end">
                <Link
                  href={`tasks/${task.id}/edit`}
                  className="text-underline-none bg-slate-200 text-black p-2 shadow-md rounded-sm"
                >
                  Edit
                </Link>
                <DeleteTask id={task.id} />
              </div>
            </div>
          ))
        ) : (
          <>NO TASKS</>
        )}
      </div>
    </>
  );
};

export default TasksList;
