import { useEffect, useRef } from "react";
import { Col, Image, Row, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "#hooks";
import {
  getCardsError,
  getCurrentCard,
  getUserLoggedInStatus,
  loadSingleCard,
} from "#store";
import { BackButton, FavoriteButton } from "#ui";
import locale from "#locale";

const CardPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const card = useAppSelector(getCurrentCard);
  const isLoggedIn = useAppSelector(getUserLoggedInStatus);
  const errorSearch = useAppSelector(getCardsError);
  const textRef = useRef<HTMLParagraphElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) dispatch(loadSingleCard(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (card?.text && textRef.current)
      textRef.current.insertAdjacentHTML("afterbegin", card.text);
  }, [card]);

  useEffect(() => {
    if (errorSearch) {
      navigate({ pathname: "/not_found" });
      dispatch({ type: "cards/cardsErrorCleaned" });
    }
  }, [errorSearch, dispatch, navigate]);

  return (
    <>
      <BackButton />
      <Row>
        {card ? (
          <>
            <Col className="text-end">
              <Image src={card.img} />
            </Col>
            <Col>
              <div className="position-relative">
                <h1>{card.name}</h1>
                {isLoggedIn && (
                  <FavoriteButton
                    className="position-absolute top-50 end-0 translate-middle-y"
                    id={card.cardId}
                  />
                )}
              </div>
              <hr />
              {card.text && (
                <>
                  <h2>Текст карты</h2>
                  <p className="fs-5" ref={textRef} />
                </>
              )}
              {card.flavor && (
                <>
                  <h2>Легенда</h2>
                  <p className="fst-italic">{card.flavor}</p>
                </>
              )}
              <h5>Ключевые параметры:</h5>
              <ul>
                <li>Карта из набора "{locale.sets[card.cardSet]}"</li>
                <li>Тип: {locale.types[card.type]}</li>
                {card.playerClass && (
                  <li>Класс: {locale.classes[card.playerClass]}</li>
                )}
                {card.race && <li>Расса: {locale.races[card.race]}</li>}
                {card.cost?.toString() && <li>Стоимость: {card.cost}</li>}
                {card.attack?.toString() && <li>Атака: {card.attack}</li>}
                {card.health?.toString() && <li>Здоровье: {card.health}</li>}
                {card.durability?.toString() && (
                  <li>Прочность: {card.durability}</li>
                )}
                {card.rarity && (
                  <li>Качество: {locale.qualities[card.rarity]}</li>
                )}
              </ul>
              <hr />
            </Col>
          </>
        ) : (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" />
          </div>
        )}
      </Row>
    </>
  );
};

export { CardPage };
