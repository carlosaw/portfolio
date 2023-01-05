import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './context';
import express from "express";
import { Router } from "express";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);

const app = express();

const route = Router();

route.get('/', (req, res) => {
  return res.json({
    success: true,
    message: "Sucesso!"
  })
});
app.use(route);

app.listen(3000, () => {
  console.log("Server running in " + 3000)
})