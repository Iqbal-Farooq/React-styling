import React, { useState,useEffect,useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Auth from './Context/Auth';
import { AuthContextProvider } from './Context/Auth';

function App() {
 const ctx= useContext(Auth);
 

 

  return (
    
  <>
      <MainHeader  />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
      </>
  )
}

export default App;
