import './navBar.css'
import {CartWidget} from './cartWidget.js'


const NavBar = () => {
    return (
        <header>
            <h1>HypeSel Store</h1>
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Productos</a>
                <a href="#">Contacto</a>
                <a href="#"><CartWidget/></a>
            </nav>
        </header>
    )
}

export default NavBar;