import React from "react";
import './itemListContainer.css';

export const ItemListContainer =({greeting,children}) =>{
    return (
        <div className="Item">
            <h1 className="tittle">{greeting}</h1>
            {children}
        </div>
    );
}
export default ItemListContainer;