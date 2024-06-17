import Header from "./components/Header";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Route, Routes } from "react-router-dom";
import AppContext from "./context";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get(
        "https://664edb69fafad45dfae1496f.mockapi.io/items"
      );
      const cartResponse = await axios.get(
        "https://664edb69fafad45dfae1496f.mockapi.io/cart"
      );
      const favoriteResponse = await axios.get(
        "https://66534bb4813d78e6d6d7ddbc.mockapi.io/favorite"
      );
      setIsLoading(false);
      setItems(itemsResponse.data);
      setCartItems(cartResponse.data);
      setFavoriteItems(favoriteResponse.data);
    }
    fetchData();
  }, []);

  // axios
  //   .get("https://664edb69fafad45dfae1496f.mockapi.io/items")
  //   .then((response) => {
  //     setItems(response.data);
  //   });

  // axios
  //   .get("https://664edb69fafad45dfae1496f.mockapi.io/cart")
  //   .then((response) => {
  //     setCartItems(response.data);
  //   });

  // axios
  //   .get("https://66534bb4813d78e6d6d7ddbc.mockapi.io/favorite")
  //   .then((response) => {
  //     setFavoriteItems(response.data);
  //     console.log(response.data);
  //   });

  // useEffect(() => {
  //   console.log(favoriteItems);
  // }, [favoriteItems]);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://664edb69fafad45dfae1496f.mockapi.io/cart/${obj.id}`
        );
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        axios.post("https://664edb69fafad45dfae1496f.mockapi.io/cart/", obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert("Не вдалось добавити до корзини");
    }

    // if (
    //   !cartItems.find(
    //     (item) => item.title === obj.title && item.price === obj.price
    //   ) &&
    //   obj.isAdded === false
    // ) {
    //   axios
    //     .post("https://664edb69fafad45dfae1496f.mockapi.io/cart/", obj)
    //     .then((response) => setCartItems((prev) => [...prev, response.data]));
    // }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favoriteItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://66534bb4813d78e6d6d7ddbc.mockapi.io/favorite/${obj.id}`
        );
        // setFavoriteItems((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://66534bb4813d78e6d6d7ddbc.mockapi.io/favorite",
          obj
        );

        setFavoriteItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не вдалось добавити до улюблених");
    }

    // if (
    //   !favoriteItems.find(
    //     (item) => item.title === obj.title && item.price === obj.price
    //   ) &&
    //   obj.isFavorite === false
    // )
    //   axios
    //     .post("https://66534bb4813d78e6d6d7ddbc.mockapi.io/favorite", obj)
    //     .then((response) =>
    //       setFavoriteItems((prev) => [...prev, response.data])
    //     );
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
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
    <AppContext.Provider value={{items, cartItems, favoriteItems, isItemAdded, onAddToFavorite, setCartOpened, setCartItems}}>
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
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToCart={onAddToCart}
                onAddToFavorite={onAddToFavorite}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favoriteItems={favoriteItems}
                onAddToFavorite={onAddToFavorite}
                cartItems={cartItems}
              />
            }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;

/*    <div className="wrapper">
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
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favoriteItems={favoriteItems}
              onAddToFavorite={onAddToFavorite}
              cartItems={cartItems}
            />
          }
        />
      </Routes>
    </div>*/
