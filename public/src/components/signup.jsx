import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Signup() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser(user => ({ ...user, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('button cicked')
    if (user.firstName && user.lastName && user.email && user.username &&
       (user.password === user.confirmPassword)) {
    //add to DB
    //post req state
    React.useEffect(() => {
      axios.get()
    })
    }
  }

  return (
    <div>
      <h2>Signup</h2>
      <form name="signup" onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type ="text" name="firstName" value={user.firstName} onChange={handleChange}/>
        </div>
        <div>
          <label>Last Name</label>
          <input type ="text" name="lastName" value={user.lastName} onChange={handleChange}/>
        </div>
        <div>
        <label>Email</label>
          <input type ="text" name="email" value={user.email} onChange={handleChange}/>
        </div>
        <div>
          <label>Username</label>
          <input type ="text" name="username" value={user.username} onChange={handleChange}/>
        </div>
        <div>
          <label>Password</label>
          <input type ="text" name="password" value={user.password} onChange={handleChange}/>
        </div>
        <div>
          <label>Confirm Password</label>
          <input type ="text" name="confirmPassword" value={user.confirmPassword} onChange={handleChange}/>
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
}

export { Signup }