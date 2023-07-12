import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorView from './components/ErrorView/ErrorView';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorView />,
    children: [
      {
        path: '/home',
        element: <Landing />,
      },
      {
        path: '/Login',
        element: <Login />,
      },
    ],
  },
]);
// {/* <RouterProvider router={router} /> */}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <RouterProvider router={router} />
  </div>
);
