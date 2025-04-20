import React, { useEffect } from "react";
import AcceptTask from "../TaskList/AcceptTask";
import NewTask from "../TaskList/NewTask";
import CompleteTask from "../TaskList/CompleteTask";
import FailedTask from "../TaskList/FailedTask";

function EmployeeDashboard({data , changeUser}) {

  const handleLogout = () => {
    localStorage.setItem('loggedInUser' , '')
    changeUser('')
    // window.location.reload()
  }

  return (
    <div className="w-full min-h-screen bg-[#1C1C1C] problem flex py-2 justify-center px-3 ">
      
      <div className="w-full rounded lg:w-[80%]">
        {/* ------ header ---- */}

        <div className="header w-full py-2 min-h-15 flex justify-between px-7 items-center text-white">
          <div>
            <p className="text-md">Hello,</p>
            <h1 className="text-lg">{data.firstName} 👋</h1>
          </div>
          <button onClick={handleLogout} className="py-1 px-2 bg-red-500 text-white text-sm lg:text-base rounded-lg">
            Log out
          </button>
        </div>

        {/* --------Task Dashboard------- */}

        <div className="w-full mt-[2vw] flex flex-wrap justify-center items-center p-3 gap-5 text-white font-bold">
          <div className="box1 w-[45%] lg:w-[23%] h-[15vh] rounded-lg bg-green-500 flex flex-col p-5 justify-center ">
            <h1>{data.taskCounts.newTask}</h1>
            <h1>New Tasks</h1>
          </div>
          <div className="box1 w-[45%] lg:w-[23%] h-[15vh] rounded-lg bg-blue-500  flex flex-col p-5 justify-center">
            <h1>{data.taskCounts.completed}</h1>
            <h1>Completed Tasks</h1>
          </div>
          <div className="box1 w-[45%] lg:w-[23%] h-[15vh] rounded-lg bg-green-600  flex flex-col p-5 justify-center">
            <h1>{data.taskCounts.active}</h1>
            <h1>Active Tasks</h1>
          </div>
          <div className="box1 w-[45%] lg:w-[23%] h-[15vh] rounded-lg bg-amber-400  flex flex-col p-5 justify-center">
            <h1>{data.taskCounts.failed}</h1>
            <h1>Failed Tasks</h1>
          </div>
        </div>

        {/* --------Tasks list------------ */}

        <h1 className="text-center text-2xl font-bold text-gray-400 mt-5 mb-5">Task List</h1>

        <div className="w-full min-h-40 mt-5 px-6 flex flex-col gap-5 lg:flex-row lg:flex-wrap">
        {data.tasks.map((elem , idx) => {
          if(elem.active){
            return <AcceptTask task={elem} key={idx}/>
          }
          if(elem.failed){
            return <FailedTask task={elem} key={idx}/>
          }
          if(elem.newTask){
            return <NewTask task={elem} key={idx}/>
          }
          if(elem.completed){
            return <CompleteTask task={elem} key={idx}/>
          }
        })} 
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
