import Div from "./Div"
 
const List=(props)=>{

    return(
        <Div>
        <h1>list of users</h1>
            <ul>
        
         {props.users.map((user)=>{return <li> Name is :  {user.name}  & Age Is : {user.age} 😄 </li>})}
          
               
            </ul>
        </Div>
    )
}
export default List ;