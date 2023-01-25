
import { Link } from 'react-router-dom'
import Boton from '../itemCount/itemCount'
import '../item/item.css'




const  Item =({prod}) =>{
 return(
    
      <div key={prod.id} className="cards">
            <img src={prod.imagen}/>                    
            <p>{prod.nombre}</p>                    
            <p>Precio ${prod.precio}</p>
            <p> {prod.categoria}</p>
            <Link to={`/detail/${prod.id}`} className="VerMas"> Ver Mas</Link>            
         </div>

    
 )
}
export default Item