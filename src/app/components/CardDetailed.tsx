import { memo } from "react";
import { Card } from "../services/api.service";

type cardDetailedType = {
  card?: Card;
  ChangeFavouriteStatus: Function;
  isFavourite: boolean;
};
const CardDetailed = ({
  card,
  ChangeFavouriteStatus,
  isFavourite,
}: cardDetailedType) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "1840px", padding: "20px" }}>
      <div className="row g-0">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
          className="col-md-4"
        >
          <img style={{ maxWidth: "300px" }} src={card?.img} alt="Card Pic" />
          <button
            onClick={() => ChangeFavouriteStatus()}
            className={isFavourite ? "btn btn-danger" : "btn btn-primary"}
          >
            {isFavourite ? "Убрать из избранного" : "Добавить в избранное"}
          </button>
        </div>
        <div className="col-md-8">
          <div className="value-body">
            <h1 className="value-title">{card?.name}</h1>
            <hr />
            <h2>Текст карты</h2>
            <p style={{ fontSize: "20px" }}>{card?.text}</p>
            <h2>Легенда</h2>
            <p className="value-text" style={{ fontStyle: "oblique" }}>
              {card?.flavor}
            </p>
            <h5>Ключевые параметры: </h5>
            <ul>
              <li>Card set: {card?.cardSet}</li>
              <li>Race: {card?.race}</li>
              <li>Type: {card?.type}</li>
              <li>Cost: {card?.cost}</li>
              <li>Attack:{card?.attack}</li>
              <li>Health: {card?.health}</li>
              <li>Faction: {card?.faction}</li>
              <li>PlayerClass: {card?.playerClass}</li>
              <li>Rarity: {card?.rarity}</li>
              <li>Artist: {card?.artist}</li>
              <li>Elitism: {card?.elite ? "Elite" : "Non elite card"}</li>
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
const CardDetailedMemo = memo(CardDetailed);
export { CardDetailedMemo };
