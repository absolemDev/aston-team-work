import { Container } from "react-bootstrap";
import { CardData } from "../../../services/api.service";
import { CardMemo } from "./card";

interface CardListProps {
  list: CardData[];
}

const CardList = ({ list }: CardListProps) => {
  return (
    <Container className="d-flex justify-content-center flex-wrap">
      {list.map((element) => (
        <CardMemo key={element.cardId} id={element.cardId} img={element.img} />
      ))}
    </Container>
  );
};

export default CardList;
