import React from 'react';

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen login">
      <form
        action=""
        className="items-center justify-center p-16 bg-slate-50 rounded-2xl"
      >
        <h3 class="text-2xl font-bold">Welcome to TraveL</h3>
        <p class="py-4 text-gray-600">Sign in to your account.</p>
        <div className="pt-2 mb-6 bg-gray-200 rounded-md ">
          <label
            class="block text-gray-700 text-sm font-bold mb-2 ml-3"
            for="email"
          >
            Email:
          </label>
          <input
            type="text"
            id="email"
            class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-emerald-500 transition duration-500 px-3 pb-3"
          />
        </div>
        <div className="pt-2 mb-6 bg-gray-200 rounded-md">
          <label
            class="block text-gray-700 text-sm font-bold mb-2 ml-3"
            for="email"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-emerald-500 transition duration-500 px-3 pb-3"
          />
        </div>
        <div class="flex justify-end">
          <a
            href="#"
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
      </form>
      <div class="max-w-lg mx-auto mt-12 text-center">
        <p class="text-white">
          Don't have an account?
          <a href="#" class="font-bold hover:underline">
            Sign up
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Login;
