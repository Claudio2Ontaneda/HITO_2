import React, { useEffect, useState} from 'react';
import Header from '../componentes/Header';
import CardPizza from '../componentes/CardPizza';
import {pizzas} from '../componentes/pizzas';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  useEffect(()=> {
    const fetchPizzas = async () => {
      try{
        const res = await fetch ('http://localhost:5000/api/pizzas');
        const data = await res.json();
        setPizzas(data);
      } catch (error){
        console.error("Error al obtener las pizzas:", error);
      }
    };
    fetchPizzas();
  }, []);
  return (
    <>
    <Header/>
    <div className="container d-flex flex-wrap justify-content-center">
    {pizzas.map(pizza => (
      <CardPizza
      key = {pizza.id}
      id = {pizza.id}
      name = {pizza.name}
      price = {pizza.price}
      ingredients={pizza.ingredients}
      img={pizza.img}/>
    ))}

    </div>
    </>
  )
};

export default Home;