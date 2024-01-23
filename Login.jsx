import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss'; // Import your CSS file for styling

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login', {
        email,
        password,
      });

      if (response.data === 'exist') {
        navigate('/homes', { state: { id: email } });
      } else if (response.data === 'notexist') {
        setErrorMessage('User has not signed up');
      }
    } catch (error) {
      setErrorMessage('Wrong details');
      console.error('An error occurred:', error);
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>

      <form onSubmit={submit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          name="email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          name="password"
          required
        />
        <a href='Home'>
        <button type="submit">Login</button>
        </a>
      </form>

      {errorMessage && <p>{errorMessage}</p>}

      <br />
      <p>OR</p>
      <Link to="/signup">Signup</Link>
    </div>
  );
}

export default Login;
