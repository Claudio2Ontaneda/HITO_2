import React from 'react';
import { useCart } from '../context/CartContext';
import {useUser} from '../context/UserContext';

const Cart = () => {
    const { cart, changeCount, total } = useCart();
    const {token} = useUser();
    
  return (
    <>
     <div className='container'>
      <h2>🛒 Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="text-muted">Tu carrito está vacío.</p>
      ) : (
        cart.map(p => (
          <div key={p.id} className='d-flex align-items-center border mb-3 p-2'>
            <img src={p.img} alt={p.name} width="100" />
            <div className='ms-3 flex-grow-1'>
              <h5>{p.name}</h5>
              <p>Precio: ${p.price.toLocaleString('es-CL')}</p>
              <p>Cantidad: {p.count}</p>
              <button className="btn btn-success me-2" onClick={() => changeCount(p.id, 1)}>+</button>
              <button className="btn btn-danger" onClick={() => changeCount(p.id, -1)}>-</button>
            </div>
          </div>
        ))
      )}
      <h4>Total: ${total.toLocaleString('es-CL')}</h4>
      {cart.length > 0 && <button className="btn btn-primary" disabled= {!token}>Pagar</button>}
      {!token && <p className="text-danger mt-2">Debes iniciar sesión para pagar.</p>}
    </div>
  
    </>
  )
}

export default Cart;