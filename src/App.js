import React from 'react';
import Home from './components/home/Home';
import Login from './components/Login';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

function App() {
  const token = null;

  if (!token) {
    return (
      <div className='login_form'>
        <CssBaseline />
        <Login />
      </div>
    );
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
