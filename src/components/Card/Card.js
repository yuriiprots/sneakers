import React from "react";
import style from "./Card.module.scss";
import { useState } from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";

const Card = ({
  id,
  title,
  price,
  imgUrl,
  onPlus,
  onFavorite,
  cartItems,
  favorited = false,
  added = false,
  loading = false,
}) => {
  // const checkIsAdded = () => {
  //   return cartItems.some(
  //     (cartItem) =>
  //       cartItem.title === title &&
  //       cartItem.price === price &&
  //       cartItem.imgUrl === imgUrl
  //   );
  // };

  const { isItemAdded } = React.useContext(AppContext);
  //const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, price, imgUrl});
  };

  const onClickFavorite = () => {
    console.log(isFavorite);
    setIsFavorite(!isFavorite);
    onFavorite({ id, title, price, imgUrl, isFavorite });

    console.log(isFavorite);
  };

  return (
    <div className={style.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <img
            className={style.card__btn + " " + style.favorite}
            src={
              isFavorite
                ? "/img/icon-bookmark--checked.svg"
                : "/img/icon-bookmark--unchecked.svg"
            }
            alt="Favorite"
            onClick={onClickFavorite}
          />

          <img className={style.card__img} src={imgUrl} alt="Sneaker" />
          <h5 className={style.card__title}>{title}</h5>

          <div className={style.card__info}>
            <div>
              <span>Price:</span>
              <b>{price}$</b>
            </div>

            <img
              className={style.card__btn}
              onClick={onClickPlus}
              src={
                isItemAdded(id)
                  ? "/img/icon-addToCart--checked.svg"
                  : "/img/icon-addToCart--unchecked.svg"
              }
              alt="Add to cart"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
