import "../styles/Header.scss";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <img src="img/logo.png" alt="Logo" />

          <div className="header__text">
            <h3>SNEAKERS</h3>
            <p>The best sneaker shop</p>
          </div>
        </div>
      </Link>

      <ul className="header__list">
        <li onClick={props.onClickCart}>
          <img src="/icon-cart.svg" alt="Cart" className="header__icon" />
          <span>1205$</span>
        </li>

        <Link to="/favorites">
          <li>
            <img
              src="/icon-bookmark.svg"
              alt="Favorites"
              className="header__icon"
            />
            <span>Favorites</span>
          </li>
        </Link>
        
        <li>
          <img src="/icon-profile.svg" alt="Profile" className="header__icon" />
          <span>Profile</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
