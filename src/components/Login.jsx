import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const result = await login(username, password);
        if (result.success) {
            navigate('/');
        } else {
            setError(result.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Welcome Back</h1>
                <p>Please sign in to continue</p>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">Sign In</button>
                </form>
                <div className="demo-credentials">
                    <p>Demo Credentials:</p>
                    <code>admin / password</code>
                </div>
            </div>

            <style>{`
                .login-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    background: var(--background-color);
                    padding: 1rem;
                }

                .login-card {
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 3rem;
                    border-radius: 20px;
                    width: 100%;
                    max-width: 400px;
                    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
                }

                .login-card h1 {
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                    background: linear-gradient(to right, #3b82f6, #8b5cf6);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    text-align: center;
                }

                .login-card p {
                    color: var(--secondary-color);
                    text-align: center;
                    margin-bottom: 2rem;
                }

                .error-message {
                    background: rgba(239, 68, 68, 0.1);
                    color: #ef4444;
                    padding: 0.75rem;
                    border-radius: 8px;
                    margin-bottom: 1.5rem;
                    text-align: center;
                    font-size: 0.9rem;
                }

                .form-group {
                    margin-bottom: 1.5rem;
                }

                .form-group label {
                    display: block;
                    color: var(--text-color);
                    margin-bottom: 0.5rem;
                    font-size: 0.9rem;
                }

                .form-group input {
                    width: 100%;
                    padding: 0.75rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    color: white;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                }

                .form-group input:focus {
                    outline: none;
                    border-color: #3b82f6;
                    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
                }

                .login-btn {
                    width: 100%;
                    padding: 0.75rem;
                    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: transform 0.2s ease, opacity 0.2s ease;
                }

                .login-btn:hover {
                    opacity: 0.9;
                    transform: translateY(-1px);
                }

                .demo-credentials {
                    margin-top: 2rem;
                    text-align: center;
                    padding-top: 1rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .demo-credentials p {
                    margin-bottom: 0.5rem;
                    font-size: 0.8rem;
                }

                .demo-credentials code {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 0.25rem 0.5rem;
                    border-radius: 4px;
                    font-size: 0.9rem;
                    color: #e5e7eb;
                }
            `}</style>
        </div>
    );
};

export default Login;
