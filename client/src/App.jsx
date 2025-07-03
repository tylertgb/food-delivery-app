// src/App.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import LoginModal from './components/login.modal/LoginModal';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  return (
    <main className='min-h-screen'>
      {showLoginModal && <LoginModal setShowLoginModal={setShowLoginModal} />}
      <Navbar setShowLoginModal={setShowLoginModal}/>
      <div className='px-4 md:px-36 mt-8'>
        <Outlet />
      </div>
      <Footer/>
    </main>
  );
}

export default App;       