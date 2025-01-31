import { useState, useContext} from "react"
import { CartContext } from "../context/CartContext"


function ItemCount ({item}) {
    const [contador, setContador] = useState(0)
    const { addToCart } = useContext (CartContext)
    const sumarProducto = () => {setContador(contador + 1)}

    const restarProducto = () => {
            if (contador>0){
            setContador(contador - 1)
            }else{
            
                alert('No se pueden ingresar unidades menores a 0')
            }
    }
    const agregarAlCarrito = () => {
        if (contador==0){
            alert('No se puede agregar un producto sin unidades')
        }else{
            addToCart ({...item, cantidad : contador})
        }
    }
return (
    <div>
        <p style={{border: 'solid 1px white'}}>{contador}</p>
            <button style={{backgroundColor:'blue'}} onClick={sumarProducto}>Sumar Unidades</button>
            <button style={{backgroundColor:'red'}} onClick={restarProducto}>Restar Unidades</button>
            <button style={{backgroundColor:'yellow'}} onClick={agregarAlCarrito}>Agregar al Carrito</button>
        </div>
    ) 
 
}
export default ItemCount