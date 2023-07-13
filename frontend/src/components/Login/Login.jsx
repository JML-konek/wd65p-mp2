import React from 'react';
import { useState } from 'react';
import constants from '../constants';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [errorMsg, setErrorMsg] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderErrorMsg = error => {
    return <div className="text-red-600">{error}</div>;
  };

  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    // alert('I have catch your submissiom');

    const body = {
      username: event.target['username'].value,
      password: event.target['password'].value,
    };
    fetch(`${constants.ENDPOINT}/api/auth/login`, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          navigate('/');
        } else {
          alert('Invalid Login');
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen login">
      <form
        onSubmit={handleSubmit}
        className="items-center justify-center p-16 bg-slate-50 rounded-2xl"
      >
        <h3 className="text-2xl font-bold">Welcome to TraveL</h3>
        <p className="py-4 text-gray-600">Sign in to your account.</p>
        <div className="pt-2 mb-6 bg-gray-200 rounded-md ">
          <label
            className="block mb-2 ml-3 text-sm font-bold text-gray-700"
            htmlFor="username"
          >
            Username:
          </label>
          <input
            type="text"
            name="username"
            id="username"
            required
            className="w-full px-3 pb-3 text-gray-700 transition duration-500 bg-gray-200 border-b-4 border-gray-300 rounded focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div className="pt-2 mb-6 bg-gray-200 rounded-md">
          <label
            className="block mb-2 ml-3 text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="w-full px-3 pb-3 text-gray-700 transition duration-500 bg-gray-200 border-b-4 border-gray-300 rounded focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div className="flex justify-end">
          <a
            href="/"
            className="mb-6 text-sm text-purple-600 hover:text-purple-700 hover:underline"
          >
            Forgot your password?
          </a>
        </div>
        <button
          className="w-full py-2 font-bold text-white transition duration-200 rounded shadow-lg bg-emerald-500 hover:bg-emerald-600 hover:shadow-xl"
          type="submit"
        >
          Sign In
        </button>
        {/* error msg */}
        {renderErrorMsg(errorMsg)}
      </form>
      <div className="max-w-lg mx-auto mt-12 text-center">
        <p className="text-white">
          Don't have an account?
          <a href="/" className="font-bold hover:underline">
            Sign up
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Login;
