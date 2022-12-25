import Div from "./Div";
import Button from "./Button";

import { useRef} from "react";

const Form=(props)=>{
   

    const NameInput=useRef();
    const AgeInput=useRef();
    const ColgInput=useRef();


    const FormHandler=(e)=>{
        e.preventDefault();
       const name=NameInput.current.value;
        const age=AgeInput.current.value;
        const college=ColgInput.current.value;
        if(name.trim().length===0 || age.trim().length===0 || college.trim().length===0){
                alert('plz fill the necessary fields')
            return ;
        }
         if(+age <1){
            alert('plz Enter the valid age')

            return ;
        }
        props.onAdduser(name,age,college);
        NameInput.current.value='';
        AgeInput.current.value='';
        ColgInput.current.value='';
        
    }
   

    return (
   
        <Div>
            <form onSubmit={FormHandler}>
            <label>NAME:</label> <br />
            <input type="text" id="n" ref={NameInput} /> <br /> <br />
             <label>AGE:</label> <br />
            <input type="number" id="a" ref={AgeInput} /> <br /> <br />
            <label>COLLEGE NAME :</label>  <br />
            <input type="text" id="c" ref={ColgInput} /> <br /> <br />
            <Button>Submit</Button>
            <br />

            </form>
           
           
            </Div>
        
    )
}
export default Form;