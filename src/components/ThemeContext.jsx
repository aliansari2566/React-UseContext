// GrandchildComponent.js
import React from 'react';

const GrandchildComponent = ({ theme, toggleTheme }) => {
  return (
    <div>
      <p style={{ color: theme === 'light' ? '#333' : '#fff' }}>Themed Content</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};