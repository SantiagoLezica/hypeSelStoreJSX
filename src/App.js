import NavBar from './components/navBar';
import {ItemListContainer} from './itemListContainer/itemListConteiner';


function App() {
  return (
    <div>
     <NavBar/>
     <ItemListContainer greeting="Tienda de Sneakers Online"/>  
    </div> 
  );
}

export default App;
