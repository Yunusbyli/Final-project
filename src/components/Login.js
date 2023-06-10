import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authActions';
import './LoginStyles.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(username, password));
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  if (!isOpen) {
    return (
      <button className="login-toggle-button" onClick={handleToggle}>
        Sign In
      </button>
    );
  }

  return (
    <div className="login-container">
      <div className="login-close" onClick={handleToggle}>
        X
      </div>
      <input
        className="login-input"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="login-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>
        Sign In
      </button>
    </div>
  );
}

export default Login;
