import ReactDOM from 'react-dom'
const  Portal=() =>{
  
  // Creating a portal
  return ReactDOM.createPortal(<><h1 style={{color:"green",textAlign:"center"}}>PORTAL DEMO </h1>
   <h2 style={{color:"green",textAlign:"center"}}>NOW WE CAN RENDER REACT ELEMENTS OUTSIDE ROOT NODE </h2> 
   <h3  style={{color:"green",textAlign:"center" }}><i>PLEASE FILL THIS FORM</i>  </h3></>,
    
    document.getElementById('new')
 )
}
  
export default Portal;