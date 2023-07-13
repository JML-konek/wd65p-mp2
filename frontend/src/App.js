import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Packages from './components/Packages';

function App() {
  return (
    <div>
      <div className="">
        <Navbar />
        <Landing />
        <Packages />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
