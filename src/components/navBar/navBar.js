import './NavBar.scss'
import '../CartWidget/Cartwidget'
import { CartWidget } from '../CartWidget/Cartwidget'
import { Link } from 'react-router-dom'
import { useLoginContext } from '../../contex/LoginContex'
import{BsFillPersonFill} from 'react-icons/bs'




 export const NavBar = () => {
    const{user,logout}= useLoginContext()
    return( 
       
            <header>
               
                    <h1>HYPESEL STORE</h1>
                    <nav >
                        <Link className='link' to="/">Inicio</Link>
                        <Link className='link' to="/productos/Mid">Mid</Link>
                        <Link className='link' to="/productos/Low">Low</Link>                    
                        <CartWidget/>                            
                    </nav>                
                <div>
                    <span><BsFillPersonFill/> {user.email}</span>
                    <button className='log' onClick={logout}>Salir</button>
                </div>
            </header>
        
    )
}

