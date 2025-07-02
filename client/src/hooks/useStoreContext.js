// src/hooks/useAuth.js
import { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContext';

export const useStoreContext = () => {
  const context = useContext(StoreContext);
  
  if (!context) {
    throw new Error('useStoreContext must be used within an StoreProvider');
  }
  
  return context;
};