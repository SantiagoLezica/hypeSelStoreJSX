
import NavBar from "./components/navBar/navBar";
import ItemListContainer from "./itemListContainer/itemListContainer";
import ItemCount from "./components/itemCount/itemCount";
import { Component } from "react";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import itemDetail  from"./components/itemDetail/itemDetail";
import Item from "./components/item/item";
import {BrowserRouter, Routes,Route, Navigate} from "react-router-dom"





function App() {

  return (
    <BrowserRouter>

      < NavBar />
      
      <Routes>
    
      
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="productos/:categoriaId" element={<ItemListContainer />}/> 
        <Route path="/detail/:itemId" element={<ItemDetailContainer />}/>      
        <Route path="*" element={<Navigate to={"/"} />}/>
      
      
      </Routes>
     
    </BrowserRouter>

    
  );
  
   
  
}

export default App;

