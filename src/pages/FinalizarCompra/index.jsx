import React, { useContext, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { CartContext } from '../../context/cartContext';
import { productosService } from '../../services/productos';
import NavBar from '../../components/NavBar/NavBar';

function FinalizarCompra() { 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const { products, totalPrice, emptyCart} = useContext(CartContext)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emptyCart()
    localStorage.clear()
    let buyer = {
      email: `${formData.email}`, 
      name: `${formData.name}`,
      addres: `${formData.address}`
    }
    console.log(products)
    productosService.addOrden({ buyer, items: products, total: totalPrice })
    window.location.replace('/productos')
     
  };


    return (
      <Container>
         <header>
                <NavBar/>
            </header>
        <div className='container'>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
    
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
    
            <Form.Group controlId="formBasicConfirmEmail">
              <Form.Label>Direccion</Form.Label>
              <Form.Control
                type="text"
                name="adress"
                onChange={handleChange}
                required
              />
            </Form.Group>
    
            <Button onClick={handleSubmit} variant="success" className="mt-4 chart-button btn-block w-20"type="submit">
              Finalizar Compra
            </Button>
          </Form>
        </div>
      </Container>
    );
}

export {FinalizarCompra}