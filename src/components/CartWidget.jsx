import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa'; // Usa react-icons para el ícono del carrito

const CartWidget = () => {
  return (
    <div className="cart-widget" style={{ display: 'flex', alignItems: 'center' }}>
      <FaShoppingCart size={24} />
      <span className="badge-primary" style={{ marginLeft: '0.5rem' }}>3</span>
    </div>
  );
};

export default CartWidget;
