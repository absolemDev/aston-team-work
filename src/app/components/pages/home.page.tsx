import { ChangeEventHandler, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Dropdown, Image, Row, Spinner } from "react-bootstrap";
import { InputGroupMemo } from "#commonComponents";
import {
  useAppDispatch,
  useAppSelector,
  useDebouncedFunctionWithCansel,
} from "#hooks";
import { getAllCard, getCardsLoadingStatus, loadCardsBySearch } from "#store";
import { CardData } from "#services";
import style from "./pages.module.css";

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
  const showResults = Boolean(!isLoading && search && firstCards.length);

  const searching = function (searchString: string) {
    dispatch(loadCardsBySearch(searchString));
  };

  const debounceSearching = useDebouncedFunctionWithCansel(
    searching,
    500,
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
    <>
      <div className="text-center fs-2 fw-semibold mb-3">
        Здравствуй, путник! Здесь ты сможешь найти все карты из игры
        &laquo;HEARTHSTONE&raquo;.
      </div>
      <Row>
        <Col className="pt-5" md={{ span: 6, offset: 3 }}>
          <InputGroupMemo
            id="search"
            value={search}
            onChange={handleChangeSearch}
            placeholder="Введите название карты, например: &laquo;Белка&raquo;"
          />

          <Dropdown.Menu show={!!search} className="position-static">
            <Dropdown.Header>
              <div className="d-flex align-items-center">
                {isLoading ? (
                  <>
                    <strong>Поиск...</strong>
                    <Spinner className="ms-auto" animation="border" size="sm" />
                  </>
                ) : (
                  <>Результаты поиска:</>
                )}
              </div>
            </Dropdown.Header>
            {showResults &&
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
              })}
          </Dropdown.Menu>
        </Col>
        <div className="text-center fst-italic">
          Или перейдите на страницу расширенного <Link to="search">поиска</Link>
        </div>
      </Row>
    </>
  );
};

export { HomePage };
