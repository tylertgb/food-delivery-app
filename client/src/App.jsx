// src/App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <main className='min-h-screen'>
      <Navbar/>
      <div className='px-4 md:px-36 mt-8'>
        <Outlet />
      </div>
    </main>
  );
}

export default App;       