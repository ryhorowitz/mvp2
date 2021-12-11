import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Signup() {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });
  const [signed, setSigned] = useState(false)

  function handleSuccess() {
    setSigned(!signed);
    axios.get('/welcome')
      .then((res) => {
        console.log('axios GET success', res);
      })
      .catch((err) => {
        console.error('ERROR', err)
      })
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUser(user => ({ ...user, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('button cicked')
    if (user.firstname && user.lastname && user.email) {
      axios.post('/signup', {...user})
        .then((res) => {
          console.log('axios post success', res);
        })

        .catch((err) => {
          console.error('ERROR', err)
        })
      handleSuccess();
      setUser({
        firstname: '',
        lastname: '',
        email: '',
      });
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
          <button>Register</button>
        </div>
      </form>
      <div>
        {signed &&
          <div>
            <h2>
              Thank you for joining the listserv!
            </h2>
{/*
            <video controls="" autoPlay="" name="media">
              <source src="https://www.lsu.edu/hss/french/files/French%20cajun%20french%202/item49679.wav"
                  type="audio/x-wav"/>
            </video> */}
          </div>
          }
      </div>
    </div>
  );
}

export { Signup }