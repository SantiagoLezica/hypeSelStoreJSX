import Header from './components/header';
import {ItemListContainer} from './itemListContainer/itemListConteiner';


function App() {
  return (
    <div>
     <Header/>
     <ItemListContainer greeting="Tienda de Sneakers Online"/>  
    </div> 
  );
}

export default App;
