import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/cartContext';
import { useContext } from 'react';

const CartWidget = () => {

  const { total } = useContext(CartContext);

  //la lógica va siempre antes del return
  return (
    <div className="cart-widget" >
      <FontAwesomeIcon icon={faCartShopping} size="1.5x" color="black" /><small> {total}</small>
    </div>
  );
};

export default CartWidget;
