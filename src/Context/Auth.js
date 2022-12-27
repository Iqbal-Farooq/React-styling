
import React,{useState,useContext,useEffect} from "react";
const Auth=React.createContext({
    isLoggedIn:false,
    onLogout:()=>{},
    onLogIn:(email,password)=>{}
});

export default Auth;



 const AuthContextProvider=(props)=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
     useEffect(()=>{
     const Exist=localStorage.getItem('LogedIn');
  if(Exist==='1'){
    setIsLoggedIn(true)
  }

  },[])
    const logInHandler=()=>{
        localStorage.setItem('LogedIn','1')
        setIsLoggedIn(true);
    }
    const logoutHandler=()=>{
         localStorage.removeItem('LogedIn');
        setIsLoggedIn(false);
    }

    return(
        <Auth.Provider value={{isLoggedIn:isLoggedIn,onLogout:logoutHandler,onLogIn:logInHandler}}>{props.children}</Auth.Provider>


    ) 
}
export {AuthContextProvider};

