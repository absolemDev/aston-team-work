import { SearchPanel } from "#ui";
import { Container } from "react-bootstrap";
import { MainFilters } from "./main_page/main.form";

const HomePage = () => {
  return (
    <Container>
      <div className="text-center fs-2 fw-semibold mb-3">
        Здравствуй, путник! Здесь ты сможешь найти все карты из игры
        HEARTHSTONE.
      </div>
      <SearchPanel />
    </Container>
  );
};

export { HomePage };
