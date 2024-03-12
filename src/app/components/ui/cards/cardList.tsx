import { Container } from "react-bootstrap";
import { CardData } from "#services";
import { CardMemo } from "#ui";

interface CardListProps {
  list: CardData[];
  placeholder?: string;
}

const CardList = ({ list, placeholder }: CardListProps) => {
  return (
    <Container className="d-flex justify-content-center flex-wrap my-3">
      {list.length ? (
        list.map((element) => (
          <CardMemo
            key={element.cardId}
            id={element.cardId}
            img={element.img}
          />
        ))
      ) : (
        <div className="text-center fs-5 fst-italic text-secondary pt-5">
          {placeholder ? placeholder : "Список пуст"}
        </div>
      )}
    </Container>
  );
};

export { CardList };
