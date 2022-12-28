import './header.css'
import {CartWidget} from './componentes.js'


const Header = () => {
    return (
        <header>
            <h1>HypeSel Store</h1>
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Productos</a>
                <a href="#">Contacto</a>
                <a href="#"><span className='number'>7</span><CartWidget/></a>
            </nav>
        </header>
    )
}

export default Header;