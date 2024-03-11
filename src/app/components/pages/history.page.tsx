import { Container } from "react-bootstrap";
import { useAppSelector } from "../../hooks";
import { getHistory } from "../../store";
import HistoryItem from "../ui/historyItem";

const HistoryPage = () => {
  const history = useAppSelector(getHistory);

  return (
    <Container>
      <h2>История поиска</h2>
      {history.map((element, index) => (
        <HistoryItem key={index} {...element} />
      ))}
    </Container>
  );
};

export { HistoryPage };
