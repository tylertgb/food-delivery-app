import React, { useState } from 'react';
import { assets } from '../../assets/assets';

const LoginModal = ({ setShowLoginModal }) => {
    const [currentState, setCurrentState] = useState("Login");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your authentication logic here
        console.log("Form submitted:", formData);
    };

    const toggleState = () => {
        setCurrentState(prev => prev === "Login" ? "Sign Up" : "Login");
        setFormData({
            name: "",
            email: "",
            password: ""
        });
    };

    return (
        <div className='login-modal fixed inset-0 p-4 w-full h-full bg-black/50 flex items-center justify-center z-50'>
            <form 
                onSubmit={handleSubmit}
                className='bg-white rounded-2xl p-6 w-full max-w-md animate-fadeIn'
            >
                <div className='flex items-center justify-between mb-6'>
                    <h2 className='text-2xl font-bold text-gray-800'>{currentState}</h2>
                    <img 
                        src={assets.cross_icon} 
                        alt="Close" 
                        className='w-4 cursor-pointer hover:opacity-80'
                        onClick={() => setShowLoginModal(false)}
                    />
                </div>

                {currentState === "Sign Up" && (
                    <div className='mb-4'>
                        <label className='block text-gray-700 mb-2'>Your Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Enter your name'
                            className='w-full px-4 py-2 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                            required
                        />
                    </div>
                )}

                <div className='mb-4'>
                    <label className='block text-gray-700 mb-2'>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Enter your email'
                        className='w-full px-4 py-2 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                        required
                    />
                </div>

                <div className='mb-6'>
                    <label className='block text-gray-700 mb-2'>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder='Enter your password'
                        className='w-full px-4 py-2 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                        required
                        minLength={6}
                    />
                </div>

                <button
                    type="submit"
                    className='w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors mb-4'
                >
                    {currentState === "Login" ? "Login" : "Create Account"}
                </button>

                <div className='text-center'>
                    <p className='text-gray-600'>
                        {currentState === "Login" 
                            ? "Don't have an account? " 
                            : "Already have an account? "}
                        <span 
                            className='text-orange-500 cursor-pointer font-medium'
                            onClick={toggleState}
                        >
                            {currentState === "Login" ? "Sign Up" : "Login"}
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginModal;