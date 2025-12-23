import { useState } from 'react';
import { Link } from "react-router-dom";
import useLogin from '../../hooks/useLogin'; // FIX: Added import (ensure file path is correct)

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  }; // FIX: Added closing brace here

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-6 shadow-md">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login <span className="text-blue-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit} className="mt-4">
          {/* Username Input */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // FIX: Changed setPassword to setUsername
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Footer Link */}
          <Link
            to='/signup'
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          {/* Login Button */}
          <div>
            <button className="btn btn-block btn-sm mt-4" disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;