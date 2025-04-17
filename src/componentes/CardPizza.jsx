import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '../context/CartContext';

const CardPizza = ({id, name, price, ingredients, img}) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  return (
    <div className="card m-3" style={{width:'25rem', textAlign:'center'}}>
      <img src={img} className= "card-img-top" alt={`Pizza${name}`} />
      <div className="card-body">
      <h5 className="card-title text-start">{name}</h5>
      <p className="card-text text-start">
          <strong>Ingredientes:</strong><br/>
          <ul className='text-start'>
            {ingredients.map((item, index) =>(
              <li key={index}>{item}</li>
            ))}
          </ul>
        </p>
        <p className="card-text">
          <strong>Precio: </strong>${price.toLocaleString('es-CL')}
        </p>
        <div className="d-flex justify-content-between">
        <button className="btn btn-primary" onClick={() => navigate(`/pizza/${id}`)}>Ver más</button>
          <button className="btn btn-success" onClick={() => addToCart({ id, name, price, img })}>Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza