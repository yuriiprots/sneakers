import Header from "./components/Header";
import Card from "./components/Card";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const cards = [
    {
      id: 1,
      title: "Men's Nike Blazer Mid Suede Sneakers",
      price: 130,
      imgExtension: "jpg",
    },
    {
      id: 2,
      title: "Men's Nike Air Max 270 Sneakers",
      price: 130,
      imgExtension: "jpg",
    },
    {
      id: 3,
      title: "Men's Nike Blazer Mid Suede Sneakers",
      price: 85,
      imgExtension: "png",
    },
    {
      id: 4,
      title: "Puma X Aka Boku Future Rider Sneakers",
      price: 90,
      imgExtension: "jpg",
    },
    {
      id: 5,
      title: "Men's Under Armour Curry 8 Sneakers",
      price: 151,
      imgExtension: "jpg",
    },
  ];

  const [cartOpened, setCartOpened] = useState(false);

  return (
    <div className="wrapper">
      {cartOpened && <Cart onClickClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="content__header">
          <h1>All sneakers</h1>
          <div className="input__wrapper">
            <img src="/img/icon-search.svg" alt="Search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="cards">
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              price={card.price}
              imgExtension={card.imgExtension}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
