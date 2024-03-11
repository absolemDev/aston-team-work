import { Container } from "react-bootstrap";
import { useAppSelector } from "../../hooks";
import { getFavoriteCards } from "../../store";
import CardList from "../ui/cards/cardList";

const FavoritesPage = () => {
  const cards = useAppSelector(getFavoriteCards);

  return (
    <Container>
      <h2>Избранное</h2>
      <CardList list={cards} />
    </Container>
  );
};

export { FavoritesPage };
