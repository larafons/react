import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Vinilo(props) {
  return (
    <Card className="card-vinilo" style={{ width: '22rem'}}>
      <Card.Img className="card-img" variant="top" src= {props.image} />
      <Card.Body>
        <Card.Title>
          <Link to={`/productos/${props.id}`}>
            { props.name }
          </Link>
        </Card.Title>
        <Card.Text className="card-text">
          {props.artist}. { props.price }$
        </Card.Text>
        <Card.Text className="card-text">
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Vinilo;