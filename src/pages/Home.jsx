import React from "react";
import Card from "../components/Card/Card";
import AppContext from "../context";
export default function Home({
  items,
  cartItems,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToCart,
  onAddToFavorite,
  isLoading,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(8)] : filteredItems).map((card, index) => (
      <Card
        key={index}
        onPlus={(obj) => onAddToCart(obj)}
        onFavorite={(obj) => onAddToFavorite(obj)}
        cartItems={cartItems}
        loading={isLoading}
        {...card}
      />
    ));
  };
  return (
    <div className="wrapper">
      <div className="content">
        <div className="content__header">
          <h1>
            {searchValue
              ? `Search by request: "${searchValue}"`
              : "All sneakers"}
          </h1>
          <div className="input__wrapper">
            <img src="/img/icon-search.svg" alt="Search" />
            <input
              type="text"
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Search..."
            />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="removeBtn"
                src="/img/icon-remove.svg"
                alt="Close"
              />
            )}
          </div>
        </div>

        <div className="items">{renderItems()}</div>
      </div>
    </div>
  );
}

/*items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((card) => (
              <Card
                key={card.id}
                onPlus={(obj) => onAddToCart(obj)}
                onFavorite={(obj) => onAddToFavorite(obj)}
                cartItems={cartItems}
                added={cartItems.some(
                  (obj) => Number(obj.id) === Number(card.id)
                )}
                {...card}
              />
            ))*/
