import React from 'react';
import { useTheme } from './ThemeContext';

const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ padding: '20px', background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
      <h1>Themed Component</h1>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemedComponent;