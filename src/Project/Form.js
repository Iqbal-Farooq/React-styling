import Div from "./Div";
import Button from "./Button";

import { useState } from "react";

const Form=(props)=>{
    const[name,SetName]=useState('');
    const [age,SetAge]=useState('');
    const FormHandler=(e)=>{
        e.preventDefault();
        if(name.trim().length===0 || age.trim().length===0){
                alert('plz fill the necessary fields')
            return ;
        }
         if(+age <1){
            alert('plz Enter the valid age')

            return ;
        }
        // console.log(document.getElementById('n').value)
        //  console.log(document.getElementById('a').value)
        props.onAdduser(name,age);
        // console.log(`name is ${name}`);
        // console.log(`age is ${age}`);
        SetName('');
        SetAge('');
    }
    const ChangeName=(e)=>{
        // console.log(e.target.value)
        SetName(e.target.value)
    }
     const ChangeAge=(e)=>{
        //  console.log(e.target.value)
        SetAge(e.target.value);
    }

    return (
   
        <Div>
            <form onSubmit={FormHandler}>
            <label>NAME:</label> <br />
            <input type="text" id="n"  value={name} onChange={ChangeName}/> <br /> <br />
             <label>AGE:</label> <br />
            <input type="number" id="a"  value={age} onChange={ChangeAge}/> <br /> <br />
            <Button>Submit</Button>

            </form>
           
           
            </Div>
        
    )
}
export default Form;