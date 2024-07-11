import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Guanaco eShoop</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#category1">Categoría 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#category2">Categoría 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#category3">Categoría 3</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#category4">Categoría 4</a>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
