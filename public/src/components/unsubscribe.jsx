import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Unsubscribe() {
  const [email, setEmail] = useState('');
  const [unsubed, setunsubed] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target;
    setEmail(email => value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('button cicked')
    axios.post('/unsubscribe', {...email})
      .then((res) => {
        console.log(res.data);
        setEmail('');
        setunsubed(!unsubed);

      })
      .catch((err) => {
        console.error('ERROR', err)
      })
  }

  return (
    <div>
      <h2>Unsubscribe</h2>
      <form name="unsubscribe" onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="text" name="unsubscribe" value={email} onChange={handleChange} />
        </div>
        <div>
          <button>Unsubscribe</button>
        </div>
        {unsubed &&
          <div>
            <h2>
              We're sorry to see you go!!
            </h2>
          </div>
        }
      </form>
    </div>
  )
}

export { Unsubscribe }