import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
import HomePage from './components/Home/Home'

function App() {
  const [user , setUser] = useState(null)
  const [loggedInUserData , setLoggedInUserData] = useState(null)
  const [userData , setUserData] = useContext(AuthContext)
  const [showLoginPage, setShowLoginPage] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  } , [])

  const handleLogin = (email , password) => {
    if(email === 'admin@me.com' && password === '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser' , JSON.stringify({role : 'admin'}))
    }
    else if(userData){
        const employee = userData.find((e) => e.email === email && e.password === password)
        if(employee){
          setUser('employee')
          setLoggedInUserData(employee)
          localStorage.setItem('loggedInUser' , JSON.stringify({role:'employee' , data : employee}))
        }
    } else{
      alert("Wrong email or password !")
    }
  }

  const navigateToLogin = () => {
    setShowLoginPage(true); 
  }

  return (
    <div>
      {!showLoginPage ? ( 
        <HomePage navigateToLogin={navigateToLogin} />
      ) : (
        <>
          {!user ? <Login handleLogin={handleLogin}/> : ""}
          {user === 'admin' ? <AdminDashboard changeUser={setUser}/> : (user === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null)}
        </>
      )}
    </div>
  )
}

export default App
