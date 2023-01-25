import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {  pedirItemPorId } from "../../helpers/pedirDatos"
import ItemDetail from "../itemDetail/itemDetail"
import { pedirDatos } from "../../helpers/pedirDatos"



const ItemDetailContainer =({}) =>{

    const [item, setItem] = useState(null)
    const [error, setError] = useState(null)
    const {itemId} = useParams()

    useEffect(()=>{
        setError(null)
        
        pedirItemPorId( Number (itemId))
        .then((data) =>{
            setItem(data)
        })
        .catch((err) =>{
         setError(err.error)
        })

    },[itemId])

    return(
        <div className="item">
            {
            error 
            ? error
            : item && <ItemDetail {...item}/>
            }

        </div>
    )
}
export default ItemDetailContainer