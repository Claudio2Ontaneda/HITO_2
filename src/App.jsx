import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Pizza from './pages/Pizza';
import Footer from './componentes/Footer';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import RutaProtegida from './componentes/RutaProtegida';
function App() {

  return (
    <>
    <Router>
   <div className="d-flex flex-column min-vh-100">
      <Navbar/>    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pizza/:id" element={<Pizza />} />
      <Route path = "/register" element = {<Register/>}/>
      <Route path= "/login" element = {<Login/>}/>
      <Route path = "/cart" element = {<Cart/>}/>
      <Route path = "/profile" element = {<RutaProtegida><Profile/></RutaProtegida>}/>
      <Route path = "*" element = {<NotFound/>}/>
      </Routes>
      <Footer/>
     </div>
     </Router>
    </>
  );
}

export default App;
