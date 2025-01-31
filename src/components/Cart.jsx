import CartList from './CartList'
import Button from 'react-bootstrap/Button'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router'

function Cart () {
    const {cart,getTotal} = useCart()
    if (cart.lenght === 0) {
        return(
            <div>
                <h2>No tiene productos en el carrito</h2>
                <Button as={Link} to='/'>ir a ver productos</Button>
            </div>
        )
    }
    return (
        <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
            <CartList items={cart} />            
            <p className='mt-3 fw-bold'>Total Carrito: $ {getTotal()}</p>
            <Button variant='dark' className='w-50' as={Link} to='/checkout'>Finalizar Compra</Button>
            
       </div>
    )
}
export default Cart