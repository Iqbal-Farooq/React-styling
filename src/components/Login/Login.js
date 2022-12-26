import React, { useState,useEffect,useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';


const emailReducer=(state,action)=>{
  if(action.type==='USER_INPUT'){
     return {value:action.val,isValid:action.val.includes('@')};
  }
  if(action.type==="INPUT_BLUR"){
return{value:state.value,isValid:state.value.includes('@')};
  }
  return {value:'',isValid:false}

}

const passwordReducer=(state,action)=>{
  if(action.type==='USER_PASS'){
    return{value:action.val,isValid:action.val.trim().length>6};
  }
  if(action.type==='USER_BLUR'){
    return{value:state.val,isValid:state.value.trim().length>6};
  }
   return {value:'',isValid:false}

}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [enterdCollege,setEnteredCollege]=useState('');
  const[collegeIsValid,setCollegeIsValid]=useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState,dispatchEmail]=useReducer(emailReducer,{value:'',isValid:false} )
  const [passwordState,dispatchPassword]=useReducer(passwordReducer,{value:"",isValid:false})
  
  //  useEffect(()=>{
  //    console.log('Validating>>>>');
  //   const timer= setTimeout(()=>{
  //      setFormIsValid(
     
  //     enteredEmail.includes('@') &&  enteredPassword.trim().length>6  && enterdCollege.trim().length>5
  //   );

  //    },500);

  //    return ()=>{
  //     console.log('cleaneup');
  //     clearTimeout(timer);
  //    }
  //  },[enteredEmail,enteredPassword,enterdCollege]);


  const emailChangeHandler = (event) => {
    dispatchEmail({type:'USER_INPUT',val:event.target.value})
    

  };
  const collegeChangeHandler=(event)=>{
    setEnteredCollege(event.target.value);
       setFormIsValid(
      event.target.value.trim().length > 5  &&  passwordState.isValid &&   emailState.isValid 
    );
   
  }

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type:"USER_PASS"  ,val:event.target.value})
    

    setFormIsValid(
      event.target.value.trim().length > 6  &&  enterdCollege.trim().length>5 &&  emailState.isValid 
    );
  
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:"INPUT_BLUR"})
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type:'USER_BLUR'})
  };
   const validateCollegeHandler = () => {
   
    setCollegeIsValid(enterdCollege.trim().length > 5);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value,enterdCollege ,passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
           emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            required
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
         <div
          className={`${classes.control} ${
            collegeIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="college">College</label>
          <input
            type="text"
            id="college"
            value={enterdCollege}
            onChange={collegeChangeHandler}
            onBlur={validateCollegeHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
           passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
