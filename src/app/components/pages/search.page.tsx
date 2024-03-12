import {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { ButtonMemo, FilterPanelMemo } from "..";
import CardList from "../ui/cards/cardList";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  addHisory,
  getAllCard,
  getCardsLoadingStatus,
  getFilters,
  loadCardsByCardSet,
} from "../../store";
import { filterWithPagination } from "../../utils/filterWithPagination";
import {PaginationContainer} from "../ui/pagination/index";
import { SelectMemo } from "../common/form/select";
import { getSearchString } from "../../utils/getSearchParams";
import locale from "../../ruLocale.json";
import { SetsKey } from "../../services/api.service";

const SearchPage = () => {
  const dispatch = useAppDispatch();
  const [urlParams, setUrlParams] = useSearchParams();

  const initialFilter = {
    name: urlParams.get("name") || "",
    cost: urlParams.get("cost") || "",
    format: urlParams.get("format") || "",
    rarity: urlParams.get("rarity") || "",
    type: urlParams.get("type") || "",
    playerClass: urlParams.get("playerClass") || "",
    race: urlParams.get("race") || "",
  };

  const [filterParams, setSearchParams] = useState(initialFilter);

  const [cardSet, setCardSet] = useState(urlParams.get("cardSet") || "Classic");
  const prevCardSet = useRef(cardSet);
  const [currentPage, setCurrentPage] = useState(1);

  const { sets } = useAppSelector(getFilters);
  const cards = useAppSelector(getAllCard);
  const loading = useAppSelector(getCardsLoadingStatus);
  const { countItems, filteredData } = filterWithPagination(
    filterParams,
    currentPage,
    cards
  );
  const ITEM_PER_PAGE = 15;
  const handleChangeCardSet: ChangeEventHandler<HTMLSelectElement> =
    useCallback(({ target }) => {
      setCardSet(target.value);
    }, []);

  const handleChangeFilter: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = useCallback(({ target }) => {
    setSearchParams((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }, []);

  const handleChangePage = (page: number) => setCurrentPage(page);

  const handleSearch = (): void => {
    dispatch(loadCardsByCardSet(cardSet));
    dispatch(
      addHisory({
        cardSet: locale.sets[cardSet as SetsKey],
        name: filterParams.name,
        searchParams: getSearchString({ cardSet, ...filterParams }),
      })
    );
    prevCardSet.current = cardSet;
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(loadCardsByCardSet(cardSet));
  }, []);

  useEffect(() => {
    setUrlParams(getSearchString({ cardSet, ...filterParams }));
  }, [cardSet, filterParams, setUrlParams]);

  return (
    <Container className="pt-5">
      <Row>
        <Col
          md={{ span: 6, offset: 3 }}
          className="border border-black pb-2 pt-2"
        >
          <SelectMemo
            id="set"
            value={cardSet}
            options={sets}
            onChange={handleChangeCardSet}
            label="Набор"
          />
          <FilterPanelMemo
            filterParams={filterParams}
            handleChange={handleChangeFilter}
          />
          <ButtonMemo
            variant="dark"
            stretch
            onClick={handleSearch}
            disabled={prevCardSet.current === cardSet}
          >
            Поиск
          </ButtonMemo>
        </Col>
      </Row>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <CardList list={filteredData} />
          <PaginationContainer currentPage={currentPage}
                               itemsCount={countItems}
                               onPageChange={handleChangePage}
                               pageSize={ITEM_PER_PAGE}
          />
        </>
      )}
    </Container>
  );
};

export { SearchPage };
