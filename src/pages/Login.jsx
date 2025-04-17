import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import {Navigate} from 'react-router-dom';
import './Login.css';

const Login = () => {
 
    const [form, setForm] = useState({
       email:'',
       password: '' 
    });
    const [message, setMessage] = useState('');
    const handleChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!form.email || !form.password) {
          setMessage("❌ Todos los campos son obligatorios.");
          return;
        }
        if (form.password.length < 6) {
          setMessage("❌ La contraseña debe tener al menos 6 caracteres.");
          return;
        }
    
        setMessage("✅ Inicio de sesión exitoso 🎉");
      };
      
      const { token } = useUser();
      if (token) return <Navigate to="/" />;
  return (
    <>
    <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" value={form.password} onChange={handleChange} required />
        <button type="submit">Iniciar sesión</button>
      </form>
      {message && <p>{message}</p>}
    
    </>
  )
}

export default Login;