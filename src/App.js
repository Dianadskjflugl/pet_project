import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Menu from './components/menu/menu';
import AppRouter from './AppRouters';
import { AuthContext } from './context/index';

const App = () => {

  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false);
  }, [])


  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <div className='app-wraper'>
          <Menu />
          <div className='app-wraper-content'>
            <AppRouter />
          </div>
        </div>
      </BrowserRouter >
    </AuthContext.Provider>
  );
}

export default App;
