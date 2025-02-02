import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoProyectoF from '../Img/LogoProyectoF.png';
import '../Styles/HeaderAdmin.css';
import { Link } from 'react-router-dom';

function HeaderAdmin() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <p><Link to='/Admin'>Inicio</Link></p>
              </li>
              <li className="nav-item">
                <p><Link to='/AdminCatalogo'>Catálogo</Link></p>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderAdmin;
