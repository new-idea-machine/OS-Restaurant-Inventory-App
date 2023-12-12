import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as LockOutlined } from "./lock-icon.svg"; // Import your SVG or icon

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     // Add your login logic here
//   };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-md shadow-md">
          <div className="flex items-center justify-center">
            {/* <LockOutlined className="w-10 h-10 bg-primary-light text-white rounded-full" /> */}
          </div>
          <h2 className="text-3xl font-extrabold text-center">Login</h2>
          <div className="mt-1">
            <input
              type="email"
              id="email"
              autoComplete="email"
              required
              className="appearance-none rounded-md block w-full px-3 py-2 border focus:outline-none focus:ring focus:border-primary-light"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              id="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-md block w-full px-3 py-2 border focus:outline-none focus:ring focus:border-primary-light"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
            //   onClick={handleLogin}
              className="w-full bg-primary-light text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring focus:border-primary-dark"
            >
              Login
            </button>

            <div className="text-sm text-right mt-4">
              <Link to="/register" className="text-primary-light">
                Don't have an account? Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
