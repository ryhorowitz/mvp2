import React from 'react';
import {Signup} from './signup.jsx';
import {Unsubscribe} from './unsubscribe.jsx';

function App() {
  // const [view, setView] = useState({
  //   home: true,

  // });

  // function handleView(e) {
  // }
  return (
    <div>
      THANKS RONA! FROM REACT

      <h1>Cajun Word of the Week listserv!</h1>
      <Signup />
      <Unsubscribe />
    </div>

  )
}

export { App }