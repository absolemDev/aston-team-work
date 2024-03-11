import { useAppSelector } from "#hooks";
import { CardMemo } from "../Card";
import { Container, Row } from "react-bootstrap";
import React, { useMemo } from "react";

const FavouritesPage = () => {
  let favourites_ids = useAppSelector((state) => state.user.favorites);
  let cards = useAppSelector((state) => state.cards.entities);
  let favourites = useMemo(() => {
    return cards.filter((el) => favourites_ids.includes(el.cardId));
  }, [favourites_ids, cards]);

  return (
    <Container>
      <h1 className="text-center m-5">Избранное</h1>
      <Row>
        {favourites.map((el) => (
          <CardMemo key={el.cardId} id={el.cardId} img={el.img}></CardMemo>
        ))}
      </Row>
    </Container>
  );
};

export default FavouritesPage;