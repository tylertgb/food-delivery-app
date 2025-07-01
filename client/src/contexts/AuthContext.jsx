// src/contexts/AuthContext.jsx
import { createContext, useContext, useState } from 'react';
import { useLoading } from '../hooks/useLoading';
import { loginUser, registerUser } from '../services/auth.service';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const {loading, showLoading, hideLoading } = useLoading();


  const login = async (credentials) => {
    showLoading();
    try {
      const {user, token} = await loginUser(credentials);
      localStorage.setItem('token', token);
      setUser(user);
      return { success: true };
    }catch (error) {
      return { success: false, error };
    } finally {
      hideLoading();
    }
  };

  const register = async (userData) => {
    showLoading();
    try {
      const { user, token } = await registerUser(userData);
      localStorage.setItem('token', token);
      setUser(user);
      return { success: true };
    }catch (error) {
      return { success: false, error };
    } finally {
      hideLoading();
    }
  };

  const logout = () => {
    setUser(null);
    return { success: true };
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);