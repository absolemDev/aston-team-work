import { Col, Container, Dropdown, Image, Row, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { InputGroupMemo } from "..";
import { ChangeEventHandler, useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  getAllCard,
  getCardsLoadingStatus,
  loadCardsBySearch,
} from "../../store";
import { CardData } from "../../services/api.service";
import style from "./pages.module.css";
import { useDebouncedFunctionWithCansel } from "../../hooks/useDebouncedFunction";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const isLoading = useAppSelector(getCardsLoadingStatus);
  const cards = useAppSelector(getAllCard);

  const getFirstItems = (arr: CardData[], maxCount: number) => {
    const result: CardData[] = [];
    const countItems = arr.length > maxCount ? maxCount : arr.length;
    for (let i = 0; i < countItems; i++) {
      result.push(arr[i]);
    }
    return result;
  };

  const firstCards = getFirstItems(cards, 5);

  const searching = function (searchString: string) {
    dispatch(loadCardsBySearch(searchString));
  };

  const debounceSearching = useDebouncedFunctionWithCansel(
    searching,
    1000,
    true
  );

  const handleChangeSearch: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target }) => {
      setSearch(target.value);
      debounceSearching(!target.value, target.value);
      if (!target.value) dispatch({ type: "cards/cardsCleaned" });
    },
    [debounceSearching, dispatch]
  );

  return (
    <Container>
      <div className="text-center fs-2 fw-semibold mb-3 my-3">
        Здравствуй, путник! Здесь ты сможешь найти все карты из игры
        HEARTHSTONE.
      </div>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <InputGroupMemo
            id="search"
            value={search}
            onChange={handleChangeSearch}
          />
          <Dropdown.Menu show={!!search}>
            <Dropdown.Header>
              Результаты поиска
              {isLoading && (
                <Spinner className="ms-5" animation="border" size="sm" />
              )}
            </Dropdown.Header>
            {!isLoading && search && firstCards.length ? (
              firstCards.map((element) => {
                return (
                  <Dropdown.Item
                    key={element.cardId}
                    onClick={() => navigate(`/card/${element.cardId}`)}
                  >
                    <Image src={element.img} className={style.cardInSearch} />
                    <span className="ms-3 fs-5 fw-semibold">
                      {element.name}
                    </span>
                  </Dropdown.Item>
                );
              })
            ) : (
              <Dropdown.Item>Поиск не дал результатов</Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Col>
      </Row>
    </Container>
  );
};

export { HomePage };
