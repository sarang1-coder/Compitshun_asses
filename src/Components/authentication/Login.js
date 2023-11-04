import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const Login = () => {


const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '90vh',
  backgroundColor: '#24cddb',
};

const formContainerStyle = {
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  backgroundColor:'white'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle = {
  borderRadius: '4px',
  padding: '8px',
  margin:'.5rem',
  border: '1px solid #ccc',
};


const formGroupStyle = {
  margin: '10px 0',
};

const submitButtonStyle = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px',
  borderRadius: '4px',
  cursor: 'pointer',
};



  const navigate=useNavigate();

  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();


    const { email, password } = loginData;


    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (storedUserData) {
      if (email === storedUserData.email && password === storedUserData.password) {
        console.log("Login successful!");
        toast.success('Succesfully Login')
        navigate('/home');
      } else {
        console.error("Login failed: Email or password is incorrect");
        toast.error("Invalid Credential");
      }
    } else {
      console.error("User data not found in local storage");
      toast.error("User Data Not Found")
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };


  return (
    <div className="container" style={containerStyle}>
      <h3><u>Login Form</u></h3>
      <div style={formContainerStyle}>
        <form onSubmit={handleLoginSubmit} style={formStyle}>
          <div style={formGroupStyle}>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={loginData.email}
               style={inputStyle}
               onChange={handleInputChange}
               placeholder='Enter Name'
            />
            </div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              value={loginData.password}
               style={inputStyle}
               onChange={handleInputChange}
              placeholder='Enter Password'
            />
          
          <button type="submit" style={submitButtonStyle}>Login</button>
        </form>
        <Link to="/register">Not Register?</Link>
      </div>
      </div>
  );
};

export default Login;
