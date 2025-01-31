import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router"

const CartWidget = () => {
  const {getQty}= useContext(CartContext)
      return (
      <Link to='/cart'>
      <div className="cart-widget">
        
        <img src="./src/assets/img/logocartwidget.png" alt="Carrito" className="cart-icon"/> 
        
        <span className="cart-count">{getQty()}</span>
        
      </div>
      </Link> 
    );
  };
    export default CartWidget;