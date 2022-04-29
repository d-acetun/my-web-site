import { Link } from 'react-router-dom';
import './css/navbar.css'
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/my-web-site">

        <i className="fa-solid fa-house fa-2x"></i>
          
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto" style={{fontSize: '30px'}}>
            <Link className="nav-link active" aria-current="page" to="/projects">
              PROYECTOS
            </Link>
            <Link className="nav-link active ms-lg-5" to="/skills">
              HABILIDADES
            </Link>
            <Link className="nav-link  active ms-lg-5" to="/programskills">
              DESARROLLO
            </Link>
            <Link className="nav-link  active ms-lg-5" to="/contact">
              CONTACTO
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
