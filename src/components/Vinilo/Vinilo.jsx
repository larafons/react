import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../../context/cartContext';
import { useContext } from 'react';


function Vinilo(props) {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    addItem({id: props.id, artist: props.artist, name: props.name, description: props.description, price: props.price, cant: 1} ) ;
  };


  return (
    <Card className="card-vinilo" style={{ width: '18rem'}}>
      <Card.Img className="card-img" variant="top" src= {props.image} />
      <Card.Body>
        <Card.Title>
          <Link to={`/productos/${props.id}`} style={{ textDecoration: 'none', color: 'black'}}>
            { props.name }
          </Link>
        </Card.Title>
        <Card.Text className="card-text">
          {props.artist}. { props.price }$
        </Card.Text>
        <Card.Text className="card-text">
          {props.description}
        </Card.Text>
        <Button onClick={handleAddToCart} style={{ backgroundColor: 'grey', borderColor: 'grey'}}>Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default Vinilo;