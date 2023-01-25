import { Link } from "react-router-dom"
import ItemCount from "../itemCount/itemCount"
import './ItemDetail.css'





  const  ItemDetail =({ imagen,categoria, precio,cantidad,id}) =>{
  
    return(       
            <div className="añadirCarrito">               
               <img src={imagen}/>                   
                               
               <p>Precio ${precio}</p>
               <p>{cantidad}</p> 
               <small>{categoria}</small>
                <p>{id}</p> 
                <ItemCount  />
            </div>
   
       
    )
   }
   export default ItemDetail