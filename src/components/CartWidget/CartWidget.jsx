import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  //la lógica va siempre antes del return
  return (
    <div className="cart-widget" >
      <FontAwesomeIcon icon={faCartShopping} size="2x" color="black" />3
    </div>
  );
};

export default CartWidget;
