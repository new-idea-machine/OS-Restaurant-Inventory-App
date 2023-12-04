import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as LockIcon } from "./lock-icon.svg"; // Import your SVG or icon

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleRegister = async () => {
  //   // Add your registration logic here
  // };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-md shadow-md">
          <div className="flex items-center justify-center">
            {/* <LockIcon className="w-10 h-10 bg-primary-light text-white rounded-full" /> */}
          </div>
          <h2 className="text-3xl font-extrabold text-center">Register</h2>
          <form className="mt-4 space-y-4">
            <div>
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                className="appearance-none rounded-md block w-full px-3 py-2 border focus:outline-none focus:ring focus:border-primary-light"
                placeholder="Name"
                value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md block w-full px-3 py-2 border focus:outline-none focus:ring focus:border-primary-light"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-md block w-full px-3 py-2 border focus:outline-none focus:ring focus:border-primary-light"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              // onClick={handleRegister}
              className="w-full bg-primary-light text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring focus:border-primary-dark"
            >
              Register
            </button>
          </form>
          <div className="text-sm text-right mt-4">
            <Link to="/login" className="text-primary-light">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;




