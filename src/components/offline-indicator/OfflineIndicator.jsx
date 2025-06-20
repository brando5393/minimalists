import React from 'react';

const OfflineIndicator = ({ isOnline }) => {
  if (isOnline) {
    return null; // Don't show anything when online
  }

  return (
    <div className="offline-indicator">
      <div className="offline-banner">
        <span className="offline-icon">📵</span>
        <span className="offline-text">You're offline - changes will be saved locally</span>
      </div>
    </div>
  );
};

export default OfflineIndicator;
