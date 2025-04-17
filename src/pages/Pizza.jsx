import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Pizza = () => {
    const { addToCart } = useCart();
    const { id } = useParams();
    const [pizza, setPizza] = useState(null);
    useEffect(() => {
        const fetchPizza = async () => {
          try {
            const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
            const data = await res.json();
            setPizza(data);
          } catch (error) {
            console.error("Error al obtener los detalles de la pizza:", error);
          }
        };
    
        fetchPizza();
      }, [id]);
      if (!pizza) return <div className="text-center my-5">Cargando...</div>;
  return (
    <>
     <div className="container my-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <img src={pizza.img} alt={pizza.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{pizza.name}</h2>
          <p><strong>Descripción:</strong> {pizza.desc}</p>
          <p><strong>Ingredientes:</strong></p>
          <ul>
            {pizza.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h4 className="text-success">Precio: ${pizza.price.toLocaleString('es-CL')}</h4>
          <button className="btn btn-success mt-3" onClick={() => addToCart({ id, name: pizza.name, price: pizza.price, img: pizza.img })}>Añadir al carrito</button>
        </div>
      </div>
    </div>
      </>
  )
}

export default Pizza;