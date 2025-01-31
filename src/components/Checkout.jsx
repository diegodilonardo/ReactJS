import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form'
import  { useCart } from '../context/CartContext'
import  { newOrder } from '../firebase/bd'
import { serverTimestamp } from "firebase/firestore"
import {useNavigate} from 'react-router'
  
function Checkout () {
    const navegar = useNavigate()  
    const { cart, getTotal } = useCart() 
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const [name, email, phone] = form
        const order = {
            buyer: {name: name.value, email: email.value, phone:phone.value},
            items: cart,
            date: serverTimestamp(),
            total: getTotal()
        }
        newOrder(order)
       alert('Compra Generada Con exito!')
        
    }
    return (
    <div className='d-flex align-items-center justify-content-center'>
        <Form className='w-25 mt-5' onSubmit={handleSubmit}>
            <h3 className='mb-5'>Ingrese los datos a continuacion para finalizar la compra</h3>
            <Form.Group className='mb-3' controlId='name'>
                <Form.Label>Nombre y Apellido </Form.Label>
                <Form.Control type='text' placeholder='Juan Perez' required />
            </Form.Group>
            <Form.Group className='mb-3' controlId='email'>
                <Form.Label>Correo Electronico </Form.Label>
                <Form.Control type='text' placeholder='juanperez@gmail.com' required />
            </Form.Group>
            <Form.Group className='mb-3' controlId='phone'>
                <Form.Label>Telefono </Form.Label>
                <Form.Control type='text' placeholder='+5411123456789' required />
            </Form.Group>
            <Button variant='dark' type='submit' onClick={() => navegar(`/`)}>Finalizar Compra</Button>
            
            
        </Form>
        
    </div>

 )
}
export default Checkout