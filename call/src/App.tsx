import React,{useState} from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    setError('');
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter both username and password');
      return;
    }
    if (username === 'user' && password === 'user123') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password. Please try again.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setError('');
  };

  if (isLoggedIn) {
    return (
      <div className="page">
        <div className="card">
          <div className="center">
            <div className="avatar-wrap">
              <div className="avatar">
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="title">Welcome, {username}!</h1>
              <p className="muted">You have successfully logged in.</p>
            </div>

            <div className="dashboard">
              <h2 className="subtitle">User Dashboard</h2>
              <p className="muted">This is your personal user page.</p>
            </div>

            <button onClick={handleLogout} className="btn btn-danger">Logout</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="card">
        <div className="center header">
          <h1 className="title">Login</h1>
          <p className="muted">Please enter your credentials</p>
        </div>

        <div className="form">
          <div className="field">
            <label htmlFor="username" className="label">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              placeholder="Enter username"
            />
          </div>

          <div className="field">
            <label htmlFor="password" className="label">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Enter password"
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            />
          </div>

          {error && (
            <div className="error">
              {error}
            </div>
          )}

          <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>

        <div className="demo">
          <p>Demo credentials:</p>
          <p className="mono">user / user123</p>
        </div>
      </div>
    </div>
  );
}


export default App;