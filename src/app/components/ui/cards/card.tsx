import { Card } from "react-bootstrap";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import style from "./cards.module.css";
import { FavoriteButton } from ".";

interface CardProps {
  id: string;
  img: string;
}

function CardComponent({ id, img }: CardProps) {
  let navigate = useNavigate();
  const handleClick = () => navigate(`/card/${id}`);
  return (
    <>
      <Card
        onClick={handleClick}
        className={`${style.card} border-0 position-relative m-1`}
      >
        <Card.Img variant="top" src={img} />
        <FavoriteButton
          id={id}
          className={`top-0 end-0 border-0 position-absolute`}
        />
      </Card>
    </>
  );
}

const CardMemo = memo(CardComponent);
export { CardMemo };
