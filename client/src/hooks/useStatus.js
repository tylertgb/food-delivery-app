// src/hooks/useStatus.js
import { useState } from 'react';

const useStatus = () => {
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  const showStatus = (type, message) => {
    setStatus(type);
    setStatusMessage(message);
    // Auto-hide after 5 seconds
    setTimeout(() => {
      setStatus(null);
      setStatusMessage('');
    }, 5000);
  };

  return { status, statusMessage, showStatus };
};

export default useStatus;