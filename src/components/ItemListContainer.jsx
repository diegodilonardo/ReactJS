import { useState , useEffect, useContext } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router'
import { getProducts, getProductsByCategory } from '../firebase/bd'

function ItemListContainer () {
  const [items, setItems] = useState([]) 
  const  { category }  = useParams()
  
  useEffect(() => {
    
    if (category) {
        getProductsByCategory(category)
          .then (res => setItems(res))
      } else{
        getProducts()   
          .then(res => setItems(res))
        }
  },[category])

  return (
           
        <ItemList items={items}/>
    )
  }
  export default ItemListContainer