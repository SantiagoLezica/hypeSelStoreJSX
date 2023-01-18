import './navBar.css'
import {CartWidget} from './cartWidget.js'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <header>
        <h1>Tienda Online</h1>
        <nav >
            <Link className='link' to="/">Inicio</Link>
            <Link className='link' to="/productos/Mid">Mid</Link>
            <Link className='link' to="/productos/Low">Low</Link>
            
            
            <Link className='link3' to=  ""><span className='number'>9</span><CartWidget/></Link> 
                    
        </nav>
    </header>
    )
}

export default NavBar;