import React from "react";
import AppContext from "../context";
import Card from "../components/Card/Card";
import "../index.scss";

function Favorites() {
  const { favoriteItems, onAddToFavorite, cartItems } = React.useContext(AppContext);

  return (
    <div className="wrapper">
      <div className="content">
        <div className="content__header">
          <h1>My favorites</h1>
        </div>
        <div className="items">
          {favoriteItems && favoriteItems.length > 0 ? (
            favoriteItems.map((card, index) => (
              <Card
                key={index}
                favorited={true}
                onFavorite={onAddToFavorite}
                cartItems={cartItems}
                {...card}
              />
            ))
          ) : (
            <p>No favorite items found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
