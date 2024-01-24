import { useState } from 'react'
import { ThemeProvider } from './components/ThemeContext';
import ThemedComponent from './components/ThemedComponent';
import './App.css'

function App() {


  return (
    <ThemeProvider>
      <div>
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
}

export default App
