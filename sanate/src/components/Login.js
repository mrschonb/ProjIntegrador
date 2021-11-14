import Register from './Register';
import { useState } from 'react';


const Login = ({ onRegister, onLogin, setShowRegister, showRegister, pharmacies }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const logUserIn = (e) => {
    e.preventDefault();
    onLogin(username);
  }

	return (
		<div className='login'>
		<form className="login-form" onSubmit={logUserIn}>
      <div className='form-control'>
        <label htmlFor='loginEmail'>E-mail</label>
        <input id='loginEmail' type='text' placeholder='E-mail' onChange={(e) => setUsername(e.target.value)}/>
      </div>

      <div className='form-control'>
        <label htmlFor='loginPass'>Password</label>
        <input id='loginPass' type='password' onChange={(e) => setPassword(e.target.value)}/>
      </div>

      <input type='submit' value='Log In' className='btn btn-block'/>
      <input type='button' value='Register' className='btn btn-block' onClick={() => setShowRegister(!showRegister)}/>
    </form>
    {showRegister ? <Register onRegister={onRegister} pharmacies={pharmacies}/> : <></>}
    </div>
	)
}

export default Login