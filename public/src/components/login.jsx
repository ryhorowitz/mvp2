import React, { useState, useEffect } from 'react';

function Login() {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser(user => ({ ...user, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('button cicked')
    if (user.username && user.password) {
      // authenitcate
    }
  }

  return (
    <div>
      <form name="login" onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" name="username" value={user.username} onChange={handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="text" name="password" value={user.password} onChange={handleChange} />
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
    </div>
  )
}