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
          <Link to="/calzado">CALZADO</Link>
          <Link to="/accesorios">ACCESORIOS</Link>
          <Link to="/indumentaria">INDUMENTARIA</Link>
                     
        </ul>
        <CartWidget />
        
      </nav>
    );
  };
    export default Navbar;