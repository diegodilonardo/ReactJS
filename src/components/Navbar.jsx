import CartWidget from './CartWidget'
import {Link} from 'react-router'

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
            <img src="./src/assets/img/logoatk.png" alt="Logo" />
        </div>
        <ul className="navbar-links">
          <Link to="/" >INICIO</Link>
          <Link to="/mens-shoes">CALZADO</Link>
          <Link to="/sunglasses">ACCESORIOS</Link>
          <Link to="/mens-shirts">INDUMENTARIA</Link>
                     
        </ul>
        <CartWidget />
      </nav>
    );
  };
    export default Navbar;