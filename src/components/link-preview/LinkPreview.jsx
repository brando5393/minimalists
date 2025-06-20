import React from 'react';

const LinkPreview = ({ url }) => {
  console.log('🔥 LinkPreview component DEFINITELY rendered for URL:', url);
  
  return (
    <span 
      className="link-preview-container" 
      style={{ 
        background: 'yellow', 
        padding: '10px',
        display: 'inline-block',
        marginLeft: '10px',
        border: '3px solid red',
        borderRadius: '5px'
      }}
    >
      <span style={{ color: 'red', fontWeight: 'bold', marginRight: '5px' }}>PREVIEW:</span>
      <button 
        className="preview-eye-icon"
        onClick={() => console.log('👁️ Eye clicked for:', url)}
        title="Preview link"
        type="button"
        style={{ 
          fontSize: '20px', 
          background: 'red', 
          color: 'white', 
          border: '2px solid black', 
          margin: '0 5px',
          cursor: 'pointer',
          padding: '5px'
        }}
      >
        👁️ CLICK ME
      </button>
    </span>
  );
};

export default LinkPreview;