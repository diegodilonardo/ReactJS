import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail"
import { getProductsById } from "../firebase/bd"

function ItemDetailContainer () {
    const [item, setProducto] = useState()
    const { id } = useParams()
    useEffect (() => {
        getProductsById(id)
            .then (res => setProducto(res))
    },[id])
    return(
        <ItemDetail item = {item} />  
    )
}
export default ItemDetailContainer