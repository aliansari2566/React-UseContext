import { useState } from 'react'
import { ThemeProvider } from './components/ThemeContext';
import ThemedComponent from './components/ThemedComponent';
import './App.css'

function App() {


  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <ThemedComponent theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App
