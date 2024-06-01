import CartItem from "./CartItem/CartItem";
import "../styles/Cart.scss";

function Cart({ onClickClose, onClickRemove, cartItems }) {
  return (
    <div className="overlay">
      <div className="cart">
        <h2 className="cart__title">
          Cart{" "}
          <img
            className="removeBtn"
            onClick={onClickClose}
            src="/img/icon-remove.svg"
            alt="Close"
          />
        </h2>

        {cartItems.length === 0 ? (
          <div className="cart__empty">
            <img
              src="/img/empty_cart.png"
              alt="Empty cart"
              className="cart__empty-img"
            />
            <h2>Cart is empty</h2>
            <p>
              Add some products to the cart to see them here and make an order
            </p>
            <button className="greenBtn" onClick={onClickClose}>
              Go shopping<img src="/img/icon-arrow-left.svg" alt="Arrow"></img>
            </button>
          </div>
        ) : (
          <div>
            <div className="cartItems">
              {cartItems.map((cartItem, index) => (
                <CartItem
                  key={index}
                  id={cartItem.id}
                  title={cartItem.title}
                  price={cartItem.price}
                  imgUrl={cartItem.imgUrl}
                  onRemove={() => onClickRemove(cartItem.id)}
                />
              ))}
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
                Make an order{" "}
                <img src="/img/icon-arrow-right.svg" alt="Arrow"></img>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
