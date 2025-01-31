import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

function CartList ({items}) {
    return (
        <ListGroup className = 'w-50'>
            {items.map(item => (
            <ListGroup.Item key={item.id}>
                {item.name} x {item.cantidad} $ {item.price}
                <Button variant='danger'> X </Button>
            </ListGroup.Item>
        ))}        
        </ListGroup>
    )
}
export default CartList