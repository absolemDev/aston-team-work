import { useNavigate } from "react-router-dom";
import React, { memo } from "react";
import { Button, Card as CardComponent } from "react-bootstrap";

type cardType = {
  id: string;
  img: string;
};

function Card(props: cardType) {
  const navigate = useNavigate();
  return (
    <CardComponent className="w-25 align-items-center">
      <CardComponent.Img variant="top" src={props.img} />
      <CardComponent.Body>
        <Button onClick={() => navigate(`/card/:${props.id}`)}>
          Подробнее
        </Button>
      </CardComponent.Body>
    </CardComponent>
  );
}

let CardMemo = memo(Card);
export { CardMemo };