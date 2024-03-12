import { useAppSelector } from "#hooks";
import { getHistory } from "#store";
import { BackButton, HistoryItem } from "#ui";

const HistoryPage = () => {
  const history = useAppSelector(getHistory);

  return (
    <>
      <BackButton />
      <div className="pt-3">
        {history.length ? (
          history.map((element, index) => (
            <HistoryItem key={index} {...element} />
          ))
        ) : (
          <div className="text-center fs-5 fst-italic text-secondary pt-5">
            Здесь будет храниться история поиска
          </div>
        )}
      </div>
    </>
  );
};

export { HistoryPage };
