import { Container } from 'react-bootstrap';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import NavBar from '../../components/NavBar/NavBar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Vinilo from '../../components/Vinilo/Vinilo';
import { useState, useEffect } from 'react';
import { productosService } from "../../services/productos"

function Vinilos() {
  const [products, setArticles] = useState([])

  useEffect(() => {
    productosService.getAll().then(
        vinilos => setArticles(vinilos))
  }, [])  
  return (
    <Container>
        <header>
            <NavBar/>
        </header>
        <ItemListContainer greeting="Vinilos"/>
        <Row className="row-cols-sm-1 row-cols-md-2 g-4">
            {products.map( product => 
            <Col className='Main-card'>
                <Vinilo id={product.id} image={`/images/${product.img}`}  name={product.name}  artist={product.artist} description={product.description} price={product.price}/>
            </Col>
            )}
        </Row>
    </Container>

  );
}

export {Vinilos}