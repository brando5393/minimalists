import React from 'react';

const LinkPreview = ({ url }) => {
  console.log('LinkPreview component rendered for URL:', url);
  
  return (
    <span 
      className="link-preview-container" 
      style={{ 
        background: 'yellow', 
        padding: '2px',
        display: 'inline-block',
        marginLeft: '5px'
      }}
    >
      <button 
        className="preview-eye-icon"
        onClick={() => console.log('Eye clicked for:', url)}
        title="Preview link"
        type="button"
        style={{ 
          fontSize: '16px', 
          background: 'red', 
          color: 'white', 
          border: 'none', 
          margin: '0 2px',
          cursor: 'pointer'
        }}
      >
        👁️
      </button>
    </span>
  );
};

export default LinkPreview;
