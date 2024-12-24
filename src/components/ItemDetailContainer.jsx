import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer () {
    const [producto, setProducto] = useState()
    const { id } = useParams()

    useEffect (() => {

        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(res => setProducto(res));   

    },[id])

    return(
        
        <div>
           <ItemDetail producto = {producto} />  

            
        </div>
    )
}

export default ItemDetailContainer