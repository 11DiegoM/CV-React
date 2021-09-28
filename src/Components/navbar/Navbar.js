import './Navbar.css';
import {
    NavLink
  } from "react-router-dom";
function Navbar() {
  return (

<nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/home" className="nav-link" activeClassName="active"> Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/error" className="nav-link" activeClassName="active"> Error 404</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/portafolio" className="nav-link" activeClassName="active">Portafolio</NavLink>
        </li>

      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;