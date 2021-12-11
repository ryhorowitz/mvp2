import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Signup() {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
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
    if (user.firstname && user.lastname && user.email && user.username &&
      (user.password === user.confirmPassword)) {
    //add to DB
    //post req state
      axios.post('/signup', {...user})
        .then((res) => {
          console.log('axios post success', res);
        })

        .catch((err) => {
          console.error('ERROR', err)
        })
      setUser({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
      })
    }
  }


  return (
    <div>
      <h2>Signup</h2>
      <form name="signup" onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type ="text" name="firstname" value={user.firstname} onChange={handleChange}/>
        </div>
        <div>
          <label>Last Name</label>
          <input type ="text" name="lastname" value={user.lastname} onChange={handleChange}/>
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
          <input type ="password" name="password" value={user.password} onChange={handleChange}/>
        </div>
        <div>
          <label>Confirm Password</label>
          <input type ="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange}/>
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
}

export { Signup }