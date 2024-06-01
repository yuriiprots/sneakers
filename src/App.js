import Header from "./components/Header";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Route, Routes } from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://664edb69fafad45dfae1496f.mockapi.io/items")
      .then((response) => {
        setItems(response.data);
      });

    axios
      .get("https://664edb69fafad45dfae1496f.mockapi.io/cart")
      .then((response) => {
        setCartItems(response.data);
      });

    axios
      .get("https://66534bb4813d78e6d6d7ddbc.mockapi.io/favorite")
      .then((response) => {
        setFavoriteItems(response.data);
        console.log(response.data);
      });
  }, []);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToCart = (obj) => {
    if (
      !cartItems.find(
        (item) => item.title === obj.title && item.price === obj.price
      ) &&
      obj.isAdded === false
    ) {
      axios
        .post(`https://664edb69fafad45dfae1496f.mockapi.io/cart/`, obj)
        .then((response) => setCartItems((prev) => [...prev, response.data]));
    }
  };

  const onAddToFavorite = (obj) => {
    if (
      !favoriteItems.find(
        (item) => item.title === obj.title && item.price === obj.price
      ) &&
      obj.isFavorite === false
    )
      axios
        .post(`https://66534bb4813d78e6d6d7ddbc.mockapi.io/favorite/`, obj)
        .then((response) =>
          setFavoriteItems((prev) => [...prev, response.data])
        );
  };

  const onRemoveToCart = (id) => {
    axios.delete(`https://664edb69fafad45dfae1496f.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onRemoveToFavorite = (id) => {
    axios.delete(`https://664edb69fafad45dfae1496f.mockapi.io/favorite/${id}`);
    setFavoriteItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Cart
          cartItems={cartItems}
          onClickClose={() => setCartOpened(false)}
          onClickRemove={onRemoveToCart}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
              cartItems={cartItems}
            />
          }
        />
        <Route
          path="/favorites"
          element={<Favorites favoriteItems={favoriteItems} />}
        />
      </Routes>
    </div>
  );
}

export default App;
