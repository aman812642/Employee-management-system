import React, { useContext, useState } from "react";
import AdminTasks from "../Other/AdminTasks";
import { AuthContext } from "../../context/AuthProvider";
import { ToastContainer , Bounce , toast } from "react-toastify";

function AdminDashboard({ changeUser }) {
  const handleLogout = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  const [userData, setUserData] = useContext(AuthContext);

  // form handling starts-------------
  const [formData, setFormData] = useState({
    taskTitle: "",
    taskDescription: "",
    taskDate: "",
    assignTo: "",
    category: "",
  });

  const [allFormData, setAllFormData] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData({
      ...formData,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setAllFormData((prev) => [...prev, formData]);

    const data = userData;
    data.forEach(function (elem) {
      if (formData.assignTo === elem.firstName) {
        elem.tasks.push(formData);
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;

        toast.success(`Task Created for ${elem.firstName}`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }
    });
    setUserData(data);

    setFormData({
      taskTitle: "",
      taskDescription: "",
      taskDate: "",
      assignTo: "",
      category: "",
    });
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-800 to-gray-900 py-6 px-4 flex-col">
      <h1 className="text-2xl font-bold mt-[-2vh] mb-5 text-gray-500">Admin Dashboard</h1>
      <div className="flex gap-50 items-center mb-6 lg:gap-[40vw]">
        <div>
          <h1 className="text-xl text-white">Hello,</h1>
          <h1 className="text-red-400 font-bold text-2xl">Aman</h1>
        </div>
        <button
          onClick={handleLogout}
          className="h-8 font-semibold px-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm lg:text-base rounded-lg hover:scale-105 transform transition-all"
        >
          Log out
        </button>
      </div>

      <div className="w-full max-w-3xl bg-[#2a2a2a] rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-300">
          Create Task
        </h1>

        {/* form started from here[----------] */}

        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => submitHandler(e)}
        >
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-sm font-semibold mb-2 text-gray-200"
            >
              Task Title
            </label>
            <input
              onChange={(e) => handleChange(e)}
              name="taskTitle"
              value={formData.taskTitle}
              type="text"
              id="title"
              className="border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-[#333] text-white"
              placeholder="Enter task title"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="text-sm font-semibold mb-2 text-gray-200"
            >
              Description (max 400 characters)
            </label>
            <textarea
              onChange={(e) => handleChange(e)}
              name="taskDescription"
              value={formData.taskDescription}
              id="description"
              maxLength={400}
              rows={4}
              className="border border-gray-600 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-purple-600 bg-[#333] text-white"
              placeholder="Enter task description"
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="date"
              className="text-sm font-semibold mb-2 text-gray-200"
            >
              Date
            </label>
            <input
              onChange={(e) => handleChange(e)}
              name="taskDate"
              value={formData.taskDate}
              type="date"
              id="date"
              className="border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-[#333] text-white"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="assignTo"
              className="text-sm font-semibold mb-2 text-gray-200"
            >
              Assign To
            </label>
            <input
              onChange={(e) => handleChange(e)}
              name="assignTo"
              value={formData.assignTo}
              type="text"
              id="assignTo"
              className="border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-[#333] text-white"
              placeholder="Enter employee name"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="category"
              className="text-sm font-semibold mb-2 text-gray-200"
            >
              Category
            </label>
            <input
              onChange={(e) => handleChange(e)}
              name="category"
              value={formData.category}
              type="text"
              id="category"
              className="border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 bg-[#333] text-white"
              placeholder="Enter task category"
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-green-600 hover:to-green-700 transform transition-all"
          >
            Create Task
          </button>
        </form>
      </div>

      <div className="w-full mt-8 lg:ml-[45vw]">
        <AdminTasks />
      </div>


      {/* toast container-------------- */}

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default AdminDashboard;
