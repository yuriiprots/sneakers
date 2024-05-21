import Header from "./Header";

function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <h2 className="drawer__title">
            Cart{" "}
            <img className="removeBtn" src="/img/icon-remove.svg" alt="Close" />
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

      <Header />
      <div className="content">
        <div className="content__header">
          <h1>All sneakers</h1>
          <div className="input__wrapper">
            <img src="/img/icon-search.svg" alt="Search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <div className="card__btn favorite">
              <img src="/img/icon-bookmark--checked.svg" alt="" />
            </div>

            <img src="/img/sneakers/sneakers_1.jpg" alt="Sneaker" />
            <h5 className="card__title">
              Men's Nike Blazer Mid Suede Sneakers
            </h5>

            <div className="card__info">
              <div>
                <span>Price:</span>
                <b>85$</b>
              </div>

              <div className="card__btn">
                <img src="/img/icon-addToCart--unchecked.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="card">
            <button className="card__btn bookmark">
              <img
                src="/img/icon-bookmark--unchecked.svg"
                className="addToBookmark"
                alt=""
              />
            </button>
            <img src="/img/sneakers/sneakers_2.jpg" alt="Sneaker" />
            <h5 className="card__title">
              Men's Nike Blazer Mid Suede Sneakers
            </h5>

            <div className="card__info">
              <div>
                <span>Price:</span>
                <b>85$</b>
              </div>

              <button className="card__btn">
                <img
                  src="/img/icon-addToCart--checked.svg"
                  alt=""
                  className="addToCart"
                />
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/sneakers/sneakers_3.png" alt="Sneaker" />
            <h5 className="card__title">
              Men's Nike Blazer Mid Suede Sneakers
            </h5>

            <div className="card__info">
              <div>
                <span>Price:</span>
                <b>85$</b>
              </div>

              <button className="card__btn">
                <img src="/img/icon-plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/sneakers/sneakers_4.jpg" alt="Sneaker" />
            <h5 className="card__title">
              Men's Nike Blazer Mid Suede Sneakers
            </h5>

            <div className="card__info">
              <div>
                <span>Price:</span>
                <b>85$</b>
              </div>

              <button className="card__btn">
                <img src="/img/icon-plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/sneakers/sneakers_5.jpg" alt="Sneaker" />
            <h5 className="card__title">
              Men's Nike Blazer Mid Suede Sneakers
            </h5>

            <div className="card__info">
              <div>
                <span>Price:</span>
                <b>85$</b>
              </div>

              <button className="card__btn">
                <img src="/img/icon-plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/sneakers/sneakers_6.jpg" alt="Sneaker" />
            <h5 className="card__title">
              Men's Nike Blazer Mid Suede Sneakers
            </h5>

            <div className="card__info">
              <div>
                <span>Price:</span>
                <b>85$</b>
              </div>

              <button className="card__btn">
                <img src="/img/icon-plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/sneakers/sneakers_7.jpg" alt="Sneaker" />
            <h5 className="card__title">
              Men's Nike Blazer Mid Suede Sneakers
            </h5>

            <div className="card__info">
              <div>
                <span>Price:</span>
                <b>85$</b>
              </div>

              <button className="card__btn">
                <img src="/img/icon-plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/sneakers/sneakers_8.jpg" alt="Sneaker" />
            <h5 className="card__title">
              Men's Nike Blazer Mid Suede Sneakers
            </h5>

            <div className="card__info">
              <div>
                <span>Price:</span>
                <b>85$</b>
              </div>

              <button className="card__btn">
                <img src="/img/icon-plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/sneakers_9.jpg" alt="Sneaker" />
            <h5 className="card__title">
              Men's Nike Blazer Mid Suede Sneakers
            </h5>

            <div className="card__info">
              <div>
                <span>Price:</span>
                <b>85$</b>
              </div>

              <button className="card__btn">
                <img src="/img/icon-plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/sneakers_1.jpg" alt="Sneaker" />
            <h5 className="card__title">
              Men's Nike Blazer Mid Suede Sneakers
            </h5>

            <div className="card__info">
              <div>
                <span>Price:</span>
                <b>85$</b>
              </div>

              <button className="card__btn">
                <img src="/img/icon-plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/sneakers/sneakers_11.png" alt="Sneaker" />
            <h5 className="card__title">
              Men's Nike Blazer Mid Suede Sneakers
            </h5>

            <div className="card__info">
              <div>
                <span>Price:</span>
                <b>85$</b>
              </div>

              <button className="card__btn">
                <img src="/img/icon-plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/img/sneakers/sneakers_12.jpg" alt="Sneaker" />
            <h5 className="card__title">
              Men's Nike Blazer Mid Suede Sneakers
            </h5>

            <div className="card__info">
              <div>
                <span>Price:</span>
                <b>85$</b>
              </div>

              <button className="card__btn">
                <img src="/img/icon-plus.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
