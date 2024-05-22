import "../styles/Cart.scss";
function Cart(props) {
  return (
    <div className="overlay">
      <div className="cart">
        <h2 className="cart__title">
          Cart{" "}
          <img
            className="removeBtn"
            onClick={props.onClickClose}
            src="/img/icon-remove.svg"
            alt="Close"
          />
        </h2>

        <div className="cartItems">
          <div className="cartItem">
            <div
              style={{
                backgroundImage: 'url("/img/sneakers/sneakers_1.jpg")',
              }}
              className="cartItem__img"
            ></div>

            <div className="cartItem__info">
              <p>Men's Nike Blazer Mid Suede Sneakers</p>
              <b>85$</b>
            </div>

            <img
              className="removeBtn"
              src="/img/icon-remove.svg"
              alt="Remove"
            />
          </div>

          <div className="cartItem">
            <div
              style={{
                backgroundImage: 'url("/img/sneakers/sneakers_2.jpg")',
              }}
              className="cartItem__img"
            ></div>

            <div className="cartItem__info">
              <p>Men's Nike Blazer Mid Suede Sneakers</p>
              <b>85$</b>
            </div>

            <img
              className="removeBtn"
              src="/img/icon-remove.svg"
              alt="Remove"
            />
          </div>

          <div className="cartItem">
            <div
              style={{
                backgroundImage: 'url("/img/sneakers/sneakers_1.jpg")',
              }}
              className="cartItem__img"
            ></div>

            <div className="cartItem__info">
              <p>Men's Nike Blazer Mid Suede Sneakers</p>
              <b>85$</b>
            </div>

            <img
              className="removeBtn"
              src="/img/icon-remove.svg"
              alt="Remove"
            />
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span className="total">Total:</span>
              <div></div>
              <b>170$</b>
            </li>
            <li>
              <span>The tax is 5%:</span>
              <div></div>
              <b>2.90$</b>
            </li>
          </ul>
          <button className="greenBtn">
            Make an order <img src="/img/icon-arrow.svg" alt="Arrow"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
