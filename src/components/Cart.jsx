import CartList from './CartList'
import Button from 'react-bootstrap/Button'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router'
import {useNavigate} from 'react-router'

function Cart () {
    const {cart,getTotal} = useCart()
    if (cart.lenght === 0) {
         return(
                  alert('No tiene productos en el carrito')
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