import Div from "./Div"
 
const List=(props)=>{

    return(
        <Div>
        <h1>list of users</h1>
            <ul>
        
         {props.users.map((user)=>{return  <li key={Math.random()}> Name is :  {user.name}  & Age Is : {user.age}  & College  Name Is : {user.college}😄 </li>})}
          
               
            </ul>
        </Div>
    )
}
export default List ;