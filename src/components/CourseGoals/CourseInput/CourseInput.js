import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [valid,setvalid]=useState(true);
   const[Btn,setBtn]=useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setvalid(true);
      setBtn(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setvalid(false);
      setBtn(false);
      return ;
    }
    props.onAddGoal(enteredValue);
  };
 

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!valid ? 'invalid': ''} `}>
        <label >Course Goal</label>
        <input  type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" style={{backgroundColor:!valid? 'red':'',color:!valid?'DarkGreen':''}}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
