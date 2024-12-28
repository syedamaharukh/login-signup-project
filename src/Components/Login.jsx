import React, { useState } from 'react';


const Login = ({ setShowLogin }) => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Login Successful');
    };

    return (
        <div className="auth-container">
            <div className="card">
                <div className="container2">
                <h2>Login</h2>
                <p>Don't have an account? <span onClick={() => setShowLogin(false)} className="link">Sign up here</span></p>
                <form className='form2' onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        value={credentials.email} 
                        onChange={handleChange} 
                        required
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter your password" 
                        value={credentials.password} 
                        onChange={handleChange} 
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
