import React, { useState } from 'react';
// Import the useAuth hook
import {Link,useNavigate } from 'react-router-dom';



const Register = () => {
    
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '90vh',
  backgroundColor: '#24cddb',
};

const labelStyle={
    margin:'1rem'
}


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


  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

	const handleSubmit = (e) => {
		e.preventDefault();

		// Save user data to local storage
		const userData = {
			username: formData.username,
			email: formData.email,
			password: formData.password,
		};

		localStorage.setItem("userData", JSON.stringify(userData));

		navigate("/login");
	};


  return (
    <div style={containerStyle} className='container'>
      <h3><u>Register</u></h3>
      <div style={formContainerStyle}>
        <form onSubmit={handleSubmit} style={formStyle}>
        <div style={formGroupStyle}>
          <label style={labelStyle} htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
             style={inputStyle}
            value={formData.username}
            onChange={handleInputChange}
            placeholder='Enter name'
            required
          />
        </div>
          <label style={labelStyle} htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
             style={inputStyle}
            onChange={handleInputChange}
            placeholder='Enter Email'
            required
          />
        {/* </div> */}
     
          <label style={labelStyle} htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
             style={inputStyle}
            onChange={handleInputChange}
            placeholder='Enter Password'
            required
          />
        <button style={submitButtonStyle} type="submit">Register</button>
      </form>
      <div>
        <Link to="/login">
            Already Register?
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Register;
