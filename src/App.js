import './App.scss';
import Card from './components/Card';
import React, { useState } from 'react'


const products = [
  {
    title: 'Coombes',
    type: "Lounge",
    price: 2600,
    rating: 4,
    img: 'https://i.imgur.com/ZAxMGG5.png',
    isAvailable: true,
    onSale: false,
  },
  {
    title: 'Keeve Set',
    type: "Table & Chairs",
    price: 590,
    rating: 4,
    img: 'https://i.imgur.com/tT8sFIs.jpeg',
    isAvailable: false,
    onSale: false,
  },
  {
    title: 'Nillè',
    type: "Armchair",
    price: 950,
    rating: 5,
    img: 'https://i.imgur.com/Vx1cZY0.png',
    isAvailable: false,
    onSale: true,
  },
  {
    title: 'Blanko',
    type: "Side table",
    price: 90,
    rating: 4,
    img: 'https://i.imgur.com/N1Bf4ox.jpg',
    isAvailable: true,
    onSale: false,
  },
  {
    title: 'Momo',
    type: "Shelves",
    price: 890,
    rating: 4,
    img: 'https://i.imgur.com/AlKxDE4.jpeg',
    isAvailable: true,
    onSale: false,
  },
  {
    title: 'Penemillè',
    type: "Chair",
    price: 120,
    rating: 4,
    img: 'https://i.imgur.com/pmANPjN.jpeg',
    isAvailable: true,
    onSale: false,
  },
  {
    title: 'Kappu',
    type: "Shelves",
    price: 420,
    rating: 4,
    img: 'https://i.imgur.com/s2rsPa1.jpg',
    isAvailable: true,
    onSale: false,
  },
];



const App = () => {

  const [valorDelInput, setValorDelInput] = useState(products)


  const handlerClickBuscar = (e) => {
    
    products.map((product) => {
      valorDelInput === product.title ?
      console.log("el valor del input", valorDelInput, "es igual a: ", product.title)
    : console.log("el valor del input", valorDelInput, "no es igual")
             
    })
    setValorDelInput("")
  }

  const handleChange = (e) => {
    setValorDelInput(e.target.value)
    console.log(setValorDelInput)
  }

  return (
    <div className="App">
      <label>
        <input type="text"
          placeholder="Por ej, chair"
          value={valorDelInput}
          onChange={handleChange}
        />
      </label>
      <button onClick={handlerClickBuscar}>BUSCAR</button>
      <div className="tarjeta">
        {products.map((product, i) =>
          <Card
            key={i}
            product={product.title}
            type={product.type}
            price={product.price}
            img={product.img}
            noStock={product.isAvailable}
            stock={product.onSale}

          />
        )}
      </div>
    </div>

  );
}

export default App;
