// src/App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <main className='min-h-screen'>
      <Navbar/>
      <div className='px-4 md:px-36 mt-8'>
        <Outlet />
      </div>
      <Footer/>
    </main>
  );
}

export default App;       