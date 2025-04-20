import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AdminTasks() {
  const [userData , setUserData] = useContext(AuthContext)
  return (
    <div>
      <div className='bg-[#353131] p-5 rounded mt-5 max-w-3xl w-[93vw] flex flex-col  gap-5 max-h-[40vh]'>
      <h1 className='mb-5 text-center font-bold'>All Tasks Status</h1>
        <div className='bg-blue-500 py-2 px-4 flex justify-between items-center rounded'>
            <h2 className='text-sm text-amber-500 w-1/5'>Employee Name</h2>
            <h3 className='text-sm text-amber-500 '>Active</h3>
            <h5 className='text-sm text-amber-500 '>Completed</h5>
            <h5 className='text-sm text-amber-500 ' >New</h5>
            <h5 className='text-sm text-amber-500'>Failed</h5>
        </div>
        <div className='overflow-auto'>
          {userData.map((elem , idx) => {

            return <div className='bg-blue-500 py-2 px-4 flex justify-between items-center rounded mb-1' key={idx}>
            <h2 className='text-sm w-1/5 text-white text-center'> {elem.firstName}</h2>
            <h3 className='text-sm w-1/5 text-white  text-end' > {elem.taskCounts.active}</h3>
            <h5 className='text-sm w-1/5 text-white  text-end' > {elem.taskCounts.completed}</h5>
            <h5 className='text-sm w-1/5 text-white  text-end' > {elem.taskCounts.newTask}</h5>
            <h5 className='text-sm w-1/5 text-white  text-end' > {elem.taskCounts.failed}</h5>
        </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default AdminTasks
