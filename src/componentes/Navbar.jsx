import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {useUser} from '../context/UserContext';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  const {total}= useCart();
  const {token, logout} = useUser();
  const navigate = useNavigate();

const handleLogout = () => {
  logout();
  navigate('/');
};

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
      <div className="container">
        <Link className="navbar-brand" to="/">🍕 Pizzería Mamma Mía</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to= "/" className="nav-link">🍕 Home</Link>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">🔓 Profile</Link>
                </li>
                <li className="nav-item">
                <button className="nav-link btn btn-link text-light" onClick={handleLogout}>
    🔒 Logout
  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">🔐 Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="register" className="nav-link">🔐 Register</Link>
                </li>
              </>
            )}
          </ul>
          <Link to="/cart" className="btn btn-success">🛒 Total: ${total.toLocaleString('es-CL')}</Link>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar