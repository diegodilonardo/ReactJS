import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col' 
import {Link, useNavigate} from 'react-router'

function Item ({item}){
  const navegar = useNavigate()  
  return(
        <Col className='colitem'>
            <Card>
              <Card.Img className="imgsize" variant="top" src={item.thumbnail} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>{item.price}</Card.Text>
                  <Card.Text>{item.category}</Card.Text>
                </Card.Body>
                <Button variant="primary" onClick={() => navegar(`/producto/${item.id}`)}>Ver Descripcion</Button>
            </Card>
        </Col>
    )
}

export default Item