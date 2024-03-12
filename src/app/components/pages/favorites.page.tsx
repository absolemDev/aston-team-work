import { useAppSelector } from "#hooks";
import { getFavoriteCards } from "#store";
import { BackButton, CardList } from "#ui";

const FavoritesPage = () => {
  const cards = useAppSelector(getFavoriteCards);

  return (
    <>
      <BackButton />
      <CardList
        list={cards}
        placeholder="Добавляй карты в избранное и просматривай их в одном месте."
      />
    </>
  );
};

export { FavoritesPage };
