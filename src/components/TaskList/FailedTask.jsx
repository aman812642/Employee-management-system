import React from 'react'

function FailedTask({task}) {
  return (
    <div className="w-full lg:w-[47%] min-h-30 rounded px-3 py-2 bg-orange-400 relative">
    <div className="task-header w-full h-fit flex justify-between items-center">
      <h1 className="text-sm px-1 bg-red-600 text-white font-semibold rounded">
      {task.category}
      </h1>
      <h1 className=" text-sm px-1 bg-red-600 text-white font-semibold rounded">
      {task.taskDate}
      </h1>
    </div>
    <div className="content">
      <h1 className="font-bold text-lg text-gray-700">{task.taskTitle}</h1>
      <p className="text-white font-normal text-sm">
       {task.taskDescription}
      </p>
    </div>
    <div className="flex justify-between mt-4">
      <button className="px-2 text-white text-sm bg-red-700 absolute bottom-2">Task Failed</button>
    </div>
  </div>
  )
}

export default FailedTask
