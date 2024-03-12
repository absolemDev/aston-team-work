import { useNavigate } from "react-router-dom";
import { ButtonMemo } from "#commonComponents";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <ButtonMemo variant="dark" onClick={() => navigate(-1)} className="ms-5">
      <i className="bi bi-caret-left-fill" />
      Назад
    </ButtonMemo>
  );
};

export { BackButton };
