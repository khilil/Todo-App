import React, { useState } from 'react';
import { FiMoreHorizontal, FiEdit2, FiTrash2 } from 'react-icons/fi'; // Using react-icons library

const ExpandableDropdown = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Trigger Icon */}
      <div onClick={toggleMenu} style={{ cursor: 'pointer' }}>
        <FiMoreHorizontal size={24} />
      </div>

      {/* Dropdown Menu */}
      <div
        style={{
          position: 'absolute',
          top: '30px',
          right: '0',
          background: '#ffffff',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          padding: '8px 0',
          transition: 'transform 0.3s ease, opacity 0.3s ease',
          transform: isExpanded ? 'scaleY(1)' : 'scaleY(0)',
          transformOrigin: 'top',
          opacity: isExpanded ? 1 : 0,
          zIndex: 100,
          overflow: 'hidden',
        }}
      >
        <div
          onClick={() => alert('Edit option clicked')}
          style={{
            padding: '10px 15px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            fontSize: '14px',
            color: '#333',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#f2f2f2')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
        >
          <FiEdit2 style={{ marginRight: '8px' }} />
          Edit
        </div>
        <div
          onClick={() => alert('Delete option clicked')}
          style={{
            padding: '10px 15px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            fontSize: '14px',
            color: 'red',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#f2f2f2')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
        >
          <FiTrash2 style={{ marginRight: '8px' }} />
          Delete
        </div>
      </div>
    </div>
  );
};

export default ExpandableDropdown;
