import React from 'react';
import GrandchildComponent from './GrandchildComponent';

const ThemedComponent = ({ theme, toggleTheme }) => {
  return <GrandchildComponent theme={theme} toggleTheme={toggleTheme} />;
};