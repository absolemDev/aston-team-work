import { Alert } from "react-bootstrap";
import { History } from "../../store";
import { useNavigate } from "react-router-dom";

const HistoryItem = ({ cardSet, name, searchParams }: History) => {
  const navigate = useNavigate();
  const heandleClick = () =>
    navigate({ pathname: "/search", search: searchParams });
  return (
    <Alert variant="secondary" role="button" onClick={heandleClick}>
      <span className="fs-5">{cardSet}</span>{" "}
      {name && <span className="ms-2 text-uppercase">"{name}"</span>}
    </Alert>
  );
};

export default HistoryItem;
