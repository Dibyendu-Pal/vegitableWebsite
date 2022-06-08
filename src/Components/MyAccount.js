import React, { useState } from 'react'
import SignUpAndLogin from './SignUpAndLogin'
import UserProfile from './UserProfile'

function MyAccount() {
  const [currentUser, setCurrentUser] = useState(undefined)
  fetch("/api/user", {
    method: 'Get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': window.localStorage.getItem("auth-token")
    }
  })
    .then(res => res.json())
    .then(data => {
      setCurrentUser(data.user)
    })


  console.log(currentUser);
  return (
    <>

      {currentUser !== undefined ? <UserProfile name={currentUser.name} email={currentUser.email} mobileNo={currentUser.mobileNo} address={currentUser.address} /> : < SignUpAndLogin />}

    </>
  )
}

export default MyAccount