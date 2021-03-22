import React, { 
  useState 
}                 from 'react';
import PropTypes  from 'prop-types'
import loginUser   from '../../services/service'
import './Login.css'

const Login = ({ setToken }) => {
  const [ username, setuserName ] = useState( null )
  const [ password, setPassword ] = useState( null )

  const handleSubmit = async e => {
    e.preventDefault()
    const token = await loginUser({
      username,
      password
    })
    setToken( token )
  }
  return (
    <div className="login_wrapper">
      <h1>Please Log In</h1>
      <form action="" onSubmit={ handleSubmit }>
        <label htmlFor="user_id">
          <p>Username</p>
          <input 
            type="text" 
            id="user_id" 
            name="user_id" 
            onChange={ e => setuserName( e.target.value ) } 
          />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input 
            type="password" 
            id="password" 
            name="password"
            onChange={ e => setPassword( e.target.value ) }
          />
        </label>
        <button type="submit" name="">Send</button>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func
}

export default Login