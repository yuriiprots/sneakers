import style from "./CartItem.module.scss";
import { useState } from "react";

const CartItem = ({ id, title, price, imgUrl, onRemove }) => {
  return (
    <div className={style.cartItem}>
      <img src={imgUrl} className={style.cartItem__img} alt="Sneaker"></img>

      <div className={style.cartItem__info}>
        <p>{title}</p>
        <b>{price}$</b>
      </div>

      <img
        className={style.removeBtn}
        src="/img/icon-remove.svg"
        alt="Remove"
        onClick={() => onRemove(id)}
      />
    </div>
  );
};

export default CartItem;
