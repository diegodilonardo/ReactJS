import { useState , useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router'

function ItemListContainer () {
  const [productos, setProductos] = useState([]) 
  const {categoria} = useParams()
  
  useEffect(() => {
    const urlRaiz = 'https://dummyjson.com/products?limit=5'
    const urlCategoria = `https://dummyjson.com/products/category/${categoria}`
     
    fetch(categoria ? urlCategoria : urlRaiz )
    
     .then(res => res.json())
     .then(res => setProductos(res.products))
     .then (console.log)
     
  },[categoria])

  return (
           
        <ItemList productos={productos}/>
    )
  }
  export default ItemListContainer