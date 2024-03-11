import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "#hooks";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useFavourite } from "../../hooks/useFavourite.hook";
import { getUserLoggedInStatus } from "#store";

const CardPage = () => {
  let { id } = useParams();
  let card = useAppSelector((state) =>
    state.cards.entities.find((el) => el.cardId === id?.slice(1)),
  );
  let [isFavourite, ChangeFavouriteStatus] = useFavourite(id ?? "");
  let isLogged = useAppSelector(getUserLoggedInStatus);

  return (
    <Container>
      <Row className="align-items-center">
        <Col>
          <Card.Img variant="top" src={card?.img} />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title className="fs-1 mb-3">{card?.name}</Card.Title>
            <Card.Title className="mb-3 fst-italic">{card?.flavor}</Card.Title>
            <p>Ключевые параметры: </p>
            <ListGroup>
              <ListGroup.Item>Card set: {card?.cardSet}</ListGroup.Item>
              <ListGroup.Item>Race: {card?.race}</ListGroup.Item>
              <ListGroup.Item>Type: {card?.type}</ListGroup.Item>
              <ListGroup.Item>Cost: {card?.cost}</ListGroup.Item>
              <ListGroup.Item>Attack:{card?.attack}</ListGroup.Item>
              <ListGroup.Item>Health: {card?.health}</ListGroup.Item>
              <ListGroup.Item>Faction: {card?.faction}</ListGroup.Item>
              <ListGroup.Item>PlayerClass: {card?.playerClass}</ListGroup.Item>
              <ListGroup.Item>Rarity: {card?.rarity}</ListGroup.Item>
              <ListGroup.Item>
                Elitism: {card?.elite ? "Elite" : "Non elite card"}
              </ListGroup.Item>
            </ListGroup>
            {isLogged ?? (
              <Button
                onClick={() => ChangeFavouriteStatus()}
                className={
                  isFavourite ? "btn btn-danger mt-5" : "btn btn-primary mt-5"
                }
              >
                {isFavourite ? "Убрать из избранного" : "Добавить в избранное"}
              </Button>
            )}
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};
const CardPageMemo = memo(CardPage);
export { CardPageMemo };