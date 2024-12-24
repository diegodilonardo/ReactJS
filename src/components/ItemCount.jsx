import { useState, useEffect } from "react";

function ItemCount () {
    const [contador, setContador] = useState(0)
useEffect (() => {

    return () => {

}
},[contador])

const sumarproducto = () => {
    setContador(contador + 1)   
        
}

const restarproducto = () => {
    setContador(contador - 1)
}


return (
<div>
<p style={{border: 'solid 1px white'}}>{contador}</p>
    <button style={{backgroundColor:'blue'}} onClick={sumarproducto}>Sumar Unidades</button>
    <button style={{backgroundColor:'red'}} onClick={restarproducto}>Restar Unidades</button>
</div>
)
}
 
export default ItemCount