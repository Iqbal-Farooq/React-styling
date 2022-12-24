
import Div from "./Div"
const Button =(props)=>{
    return (
        <Div >
            <button style={{backgroundColor:"purple",color:'white'}} >{props.children}</button>
        </Div>
    )
}
export default Button;