import { useAppSelector } from "#hooks";
import { getFavoriteCards } from "#store";
import { BackButton, CardList } from "#ui";

const FavoritesPage = () => {
  const cards = useAppSelector(getFavoriteCards);

  return (
    <>
      <BackButton />
      {cards.length ? (
        <CardList list={cards} />
      ) : (
        <div className="text-center fs-5 fst-italic text-secondary pt-5">
          Добавляй карты в избранное <i className="bi bi-heart-fill"></i> и
          просматривай их в одном месте.
        </div>
      )}
    </>
  );
};

export { FavoritesPage };
