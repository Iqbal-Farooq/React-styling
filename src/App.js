import React, { useState,useEffect} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
     const Exist=localStorage.getItem('LogedIn');
  if(Exist==='1'){
    setIsLoggedIn(true)
  }

  },[])
 

  const loginHandler = (email,college, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    const obj={
      Email:email, College:college, Password:password,
    }
    console.log(obj)
    localStorage.setItem('LogedIn','1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('LogedIn');
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
