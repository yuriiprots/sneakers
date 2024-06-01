import Header from "../components/Header";
import Card from "../components/Card/Card";
import "../index.scss";

 function Favorites({ favoriteItems }) {
  console.log(favoriteItems);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="content__header">
          <h1>My favorites</h1>
        </div>
        <div className="items">
          {favoriteItems.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              price={card.price}
              imgUrl={card.imgUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;