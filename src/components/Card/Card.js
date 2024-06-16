import style from "./Card.module.scss";
import { useState } from "react";

const Card = ({
  id,
  title,
  price,
  imgUrl,
  onPlus,
  onFavorite,
  cartItems,
  favorited = false,
}) => {
  const checkIsAdded = () => {
    return cartItems.some(
      (cartItem) =>
        cartItem.title === title &&
        cartItem.price === price &&
        cartItem.imgUrl === imgUrl
    );
  };
  const [isAdded, setIsAdded] = useState(checkIsAdded());
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    onPlus({ title, price, imgUrl, isAdded });
  };

  const onClickFavorite = () => {
    console.log(isFavorite);
    setIsFavorite(!isFavorite);
    onFavorite({ id, title, price, imgUrl, isFavorite });

    console.log(isFavorite);
  };

  return (
    <div className={style.card}>
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
            isAdded
              ? "/img/icon-addToCart--checked.svg"
              : "/img/icon-addToCart--unchecked.svg"
          }
          alt="Add to cart"
        />
      </div>
    </div>
  );
};

export default Card;
