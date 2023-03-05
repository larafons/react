import React, { useContext } from "react";
import { CartContext, CartProvider } from '../../context/cartContext';
import  NavBar from '../../components/NavBar/NavBar';
import { Container } from 'react-bootstrap';

const Cart = () => {
  const { products, totalPrice, deleteItem, emptyCart, finishPurchase } = useContext(CartContext);

    console.log(products)

  return (
    <Container>
    <NavBar/>
    <div className="container mt-5">
      <h2>Carrito</h2>
      {products && products.length > 0 ? (
        <div>
          <ul className="list-group">
            {products.map((item) => (
              <li className="list-group-item" key={item.id}>
                <div className="row align-items-center">
                  <div className="col-8">
                    <h5>{item.name}</h5>
                    <p>Precio: ${item.price}</p>
                  </div>
                  <div className="col-4 text-right">
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteItem(item.id)}
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <hr />
          <div className="row">
            <div className="col-8">
              <button className="btn btn-dark" onClick={() => finishPurchase()}>
                Comprar
              </button>
              <button className="btn btn-danger" onClick={() => emptyCart()}>
                Vaciar carrito
              </button>
            </div>
            <div className="col-4 text-right">
              <h4>Total: ${totalPrice}</h4>
            </div>
          </div>
        </div>
      ) : (
        <>
          <p>Tu carrito esta vacio :(</p>
        </>
      )}
    </div>

    </Container>
  );
};


export {Cart};