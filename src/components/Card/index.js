import style from "./Card.module.scss";
import { useState } from "react";

const Card = (props) => {
  const imgSrc = `/img/sneakers/sneakers_${props.id}.${props.imgExtension}`;

  const [isAdded, setIsAdded] = useState(false);

  const onClickCart = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={style.card}>
      <div className={style.card__btn + " " + style.favorite}>
        <img src="/img/icon-bookmark--checked.svg" alt="" />
      </div>

      <img className={style.card__img} src={imgSrc} alt="Sneaker" />
      <h5 className={style.card__title}>{props.title}</h5>

      <div className={style.card__info}>
        <div>
          <span>Price:</span>
          <b>{props.price}$</b>
        </div>

        <img
          className={style.card__btn}
          onClick={onClickCart}
          src={
            isAdded
              ? "/img/icon-addToCart--checked.svg"
              : "/img/icon-addToCart--unchecked.svg"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
