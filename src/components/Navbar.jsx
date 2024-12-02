import CartWidget from './CartWidget'

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
            <img src="./src/assets/img/logoatk.png" alt="Logo" />
        </div>
        <ul className="navbar-links">
          <li><a href="#calzado">CALZADO</a></li>
          <li><a href="#accesorios">ACCESORIOS</a></li>
          <li><a href="indumentaria">INDUMENTARIA</a></li>
          <li><a href="Novedades">NOVEDADES</a></li>
        </ul>
        <CartWidget />
      </nav>
    );
  };
    export default Navbar;