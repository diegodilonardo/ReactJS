import { CartContext } from "./CartContext"
import { useState } from "react" 

export default function CartProvider ({children}){
    const [cart, setCart] = useState([])
    
    const addToCart = item => {
        const estaencarrito = cart.some(prod => prod.id === item.id)
        if (!estaencarrito) return setCart([...cart, item])
        alert ('El producto ya se encuentra en el carrito')

    }
    const getQty = () => {
        const cantidades = cart.map(item => item.cantidad)
        const totalProductosCarrito = cantidades.reduce(
            (acumulador, valorActual) => acumulador + valorActual,
            0,
          );
        return totalProductosCarrito
    }
    const getTotal = () => {
        const totales = cart.map(item => item.cantidad*item.price)
        const total = totales.reduce(
            (acumulador, valorActual) => acumulador + valorActual,
            0,
          );
        return total
    }

    return (
    <CartContext.Provider value={{cart,addToCart,getQty,getTotal}}>
        {children}
    </CartContext.Provider>
    )
}