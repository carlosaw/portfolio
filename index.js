import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { ThemeProvider } from './src/context';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);