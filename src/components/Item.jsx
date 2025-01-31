import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col' 
import {useNavigate} from 'react-router'

function Item ({item}){
  const navegar = useNavigate()  
  return(
        <Col className='colitem'>
            <Card style={{ width: '10rem' }}>
              <Card.Img className="imgsize" variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>Precio: ${item.price}</Card.Text>
                  <Card.Text>{item.category}</Card.Text>
                  <Card.Text>Stock: {item.stock}</Card.Text>
                </Card.Body>
                <Button variant="primary" onClick={() => navegar(`/products/${item.id}`)}>Ver Descripcion</Button>
            </Card>
        </Col>
    )
}
export default Item