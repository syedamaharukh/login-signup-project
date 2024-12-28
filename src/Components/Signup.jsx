import React, { useState } from 'react';

const Signup = ({ setShowLogin }) => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setShowLogin(true);
    };

    return (
        <div className="signup-wrapper">
            <div className="signup-card">
                <div className="form-section">
                    <h1>Create Account</h1>
                    <p className="switch-text">
                        Already a member? <span onClick={() => setShowLogin(true)} className="link">Log in</span>
                    </p>
                    <form onSubmit={handleSubmit} className="signup-form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <label className="checkbox-label">
                            <input type="checkbox" required /> I agree to the Terms & Conditions.
                        </label>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Signup;