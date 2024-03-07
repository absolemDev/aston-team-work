import { Button, Card } from "react-bootstrap";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

type cardType = {
  id: string;
  title: string;
  text: string;
  img: string;
};

function CardComponent({ id, title, text, img }: cardType) {
  let navigate = useNavigate();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button onClick={() => navigate(`card/:${id}`)} variant="primary">
          Подробнее
        </Button>
      </Card.Body>
    </Card>
  );
}

let CardMemo = memo(CardComponent);
export default CardMemo;