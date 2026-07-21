import { useState } from 'react';
import { Link } from "react-router-dom";
import useLogin from '../../hooks/useLogin';
import '../Auth.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="brutal-container">
      <div className="brutal-box">
        {/* Terminal Header */}
        <div className="terminal-header">
          <span>BRUTAL_CHAT // LOGIN</span>
          <span>v2.0-PRO</span>
        </div>

        <div className="terminal-content">
          <h1 className="brutal-label" style={{ fontSize: '1.75rem', marginBottom: '24px', textAlign: 'center' }}>
            ENTER_TERMINAL_
          </h1>

          <form onSubmit={handleSubmit}>
            {/* Username Input */}
            <div className="input-group">
              <label className="brutal-label">USERNAME_</label>
              <input
                type="text"
                placeholder="USER_ID"
                className="brutal-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="input-group">
              <label className="brutal-label">ACCESS_KEY_</label>
              <input
                type="password"
                placeholder="********"
                className="brutal-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="brutal-button"
            >
              {loading ? 'INITIALIZING...' : 'BYPASS_SECURITY'}
            </button>

            {/* Sign Up Link */}
            <Link to="/signup" className="brutal-link">
              NEW_OPERATOR? REGISTER_PROTOCOL_
            </Link>
          </form>
        </div>

        {/* Status Bar */}
        <div className="status-bar">
          <span>STATUS: SYSTEM_READY</span>
          <span>ENCRYPTION: AES-256</span>
        </div>
      </div>
    </div>
  );
};

export default Login;