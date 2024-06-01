import Card from "../components/Card/Card";

export default function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToCart,
  onAddToFavorite,
  cartItems,
}) {
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

        <div className="items">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((card) => (
              <Card
                key={card.id}
                title={card.title}
                price={card.price}
                imgUrl={card.imgUrl}
                onPlus={(obj) => onAddToCart(obj)}
                onFavorite={(obj) => onAddToFavorite(obj)}
                cartItems={cartItems}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
