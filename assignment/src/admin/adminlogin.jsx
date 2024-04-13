import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLoginCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate() 


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/admin/login', { email, password });
      console.log(response) 
      if(response.data.role === 'admin'){
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('email', response.data.role)
        navigate('/admin/admindashboard')
      }
      
    } catch (err) {
      setError(err.response.message);
    }
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        paddingTop: '30px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center', color: '#333' }}>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
                width: '100%',
                padding: '5px',
                border: '1px solid #ccc',
                borderRadius: '3px',
                backgroundColor: '#fff',
                fontSize: '14px',
                outline: 'none',
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '5px',
              border: '1px solid #ccc',
              borderRadius: '3px',
              backgroundColor: '#fff',
              fontSize: '14px',
              outline: 'none',
            }}
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleLogin}
          style={{
            display: 'block',
            width: '50%',
            padding: '10px',
            marginLeft: '100px',
            backgroundColor: '#000080',
            color: '#fffff',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s ease',
          }}
        >
          Login
        </button>
      </form>
      {error && (
        <div style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default AdminLoginCard;
