import React, { useState } from 'react';

function FormField({ label, name, type, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-300 mb-2">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="p-4 rounded-xl bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none transition duration-200"
      />
    </div>
  );
}

function Login({ handleLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(formData.email, formData.password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-zinc-900 to-blue-900">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg max-w-sm w-full">
        <h1 className="text-3xl text-center text-white font-semibold mb-6">Login</h1>

        <form onSubmit={submitHandler} className="space-y-4">
          <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
          />
          <FormField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 rounded-xl text-white font-semibold hover:bg-blue-700 transition duration-300"
          >
            Log In
          </button>
        </form>
      </div>

      <div className="w-full max-w-4xl mt-10 px-4 md:px-20">
        <div className="flex justify-between items-center bg-gray-900 text-white p-4 rounded-xl shadow-xl">
          <div className="w-1/2 text-center">
            <h2 className="text-lg text-amber-500 mb-2">Admin Login Details</h2>
            <p className="text-sm">admin@me.com</p>
            <p className="text-sm">Password: 123</p>
          </div>

          <div className="w-1/2 text-center mr-2">
            <h2 className="text-lg text-amber-500 mb-2">Employee Login Details</h2>
            <p className="text-sm">e@e.com</p>
            <p className="text-sm">employee2@example.com</p>
            <p className="text-sm">employee3@example.com</p>
            <p className="text-sm">employee4@example.com</p>
            <p className="text-sm">employee5@example.com</p>
            <p className="text-sm">Password: 123</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
