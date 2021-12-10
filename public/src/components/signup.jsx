import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div >
        <h2>Signup<h2/>
          <form name="signup">
            <div>
              <label>First Name</label>
                    <input type="text" name="firstName" value={user.firstName} onChange={handleChange} className={'form-control' + (submitted && !user.firstName ? ' is-invalid' : '')} />
                    {submitted && !user.firstName &&
                        <div className="invalid-feedback">First Name is required</div>
                    }
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </form>

      </div>

    )
  }
}

export default Signup;