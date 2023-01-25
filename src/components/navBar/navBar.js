import './navBar.css'
import {CartWidget} from '../cartWidget.js'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <header>
            <Link className='link' to="/"><h1>HypeSel Store</h1></Link>
            <nav>
            
            <Link className='link' to="/">Productos</Link>
            <Link className='link' to="/productos/Low">Low</Link>
            <Link className='link' to="/productos/Mid">Mid</Link>
            <Link className='link3' to=  ""><a href="#"><CartWidget/></a></Link>
            </nav>
        </header>
    )
}

export default NavBar;