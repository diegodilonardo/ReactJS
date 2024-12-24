import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col' 
import Item from './Item'

function ItemList ({productos}) {

return(

<Container className='itemlistcontainer'>
          <Row className="rowitem">
          {productos.map(item => <Item item={item} key={item.id}/>)} 
          </Row>
        </Container>
)
}
export default ItemList