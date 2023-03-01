import Item from "../item/item"
import '../item/item.scss'



const ItemList = ( {productos} ) =>{
    return   (
        <div >
            <div className="img">
                <img className="img" src="https://sites.psu.edu/jql5817/wp-content/uploads/sites/17077/2014/09/cropped-sneaker-pile.jpg" alt="foto3"/>
            </div>
            
            <div className="nuestro"> SNEAKERS</div>
            <section className="cards">
                {productos.map((prod) => <Item  key={prod.id}prod ={prod}/>       
                )}    
               
            </section>
        </div>
    )
}
export default ItemList