import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css'; // Import your CSS file for styling

function Signup() {
  const history = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/signup', {
        name,
        email,
        password,
      });

      if (response.data === 'exist') {
        alert('User already exists');
      } else if (response.data === 'notexist') {
        history('/homes', { state: { id: email } });
      }
    } catch (error) {
      alert('Wrong details');
      console.error('An error occurred:', error);
    }
  }

  return (
    <div className='signup'>
      <h1>Signup</h1>

      <form onSubmit={submit}>
        <input
          type='text'
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter Name'
          required
        />
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter Email'
          required
        />
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter Password'
          required
        />
        <input type="submit" value="Signup" />
      </form>

      <p>Already have an account?</p>
      <Link to="/login">Login Page</Link>
    </div>
  );
}

export default Signup;
