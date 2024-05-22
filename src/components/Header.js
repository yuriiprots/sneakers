import "../styles/Header.scss";

function Header(props) {

  

  return (
    <header className="header">
      <div className="header__logo">
        <img src="img/logo.png" alt="Logo" />
        <div className="header__text">
          <h3>SNEAKERS</h3>
          <p>The best sneaker shop</p>
        </div>
      </div>

      <ul className="header__list">
        <li onClick={props.onClickCart}>
          <img src="/icon-cart.svg" alt="Cart" className="header__icon" />
          <span>1205$</span>
        </li>

        <li>
          <img
            src="/icon-bookmark.svg"
            alt="Bookmark"
            className="header__icon"
          />
          <span>Bookmarks</span>
        </li>

        <li>
          <img src="/icon-profile.svg" alt="Profile" className="header__icon" />
          <span>Profile</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
