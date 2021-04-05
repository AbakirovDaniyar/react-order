import React from 'react'
import './App.css'
import {Card} from './components/Card/index.jsx'

import pahlava from "./images/pahlava.jpg";
import pahlava2 from "./images/pahlava2.jpg";
import pahlava3 from "./images/pahlava3.jpg";
import pahlava4 from "./images/pahlava4.jpg";



function App() {
  const data = [
    {
      img: pahlava,
      price: "1900 Сом",
      text: "Пицца-Бессарабский дворик!  ",
      pieces: 12,
      composition: "Калорийность Ккал: 298",
      add: "Добавить корзину",
    },
    {
      img: pahlava2,
      price: "1100 Сом",
      text: "   Домашняя пицца в духовке с колбасой, сыром и помидорой",
      pieces: 9,
      composition: "Калорийность Ккал: 275",
      add: "Добавить корзину",
    },
    {
      img: pahlava3,
      price: "1700 Сом",
      text:"Пицца Маргарита",
      pieces: 11,
      composition: "Калорийность Ккал: 258",
      add: "Добавить корзину",
    },
    {
      img: pahlava4,
      price: "680  Сом",
      text: "Pizza Amore e Fantasia",
      pieces: 7,
      composition: "Калорийность Ккал: 240",
      add: "Добавить корзину",
    },
  ];
  return (
      <div className="App">
         {
           data.map((el ,id) =>{
             return <Card data={el} key={id}/>
           })
         }

      </div>
    
  );
}

export default App;