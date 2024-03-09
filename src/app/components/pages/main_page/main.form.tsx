import { useAppDispatch, useAppSelector } from "#hooks";
import { useEffect, useState } from "react";
import {
  getAllCard,
  getInfo,
  loadCardsByFaction,
  loadCardsInfo,
} from "../../../store/slices/cards.slice";
import { FormFilters } from "./form.filter/form.filter";
import { FormFiltersFormat } from "./form.filter/form.filter.format";
import { FormFiltersCost } from "./form.filter/form.filter.cost";
import {
  Button,
  Form,
  InputGroup,
  Spinner,
  // Placeholder
} from "react-bootstrap";
import "./style.css";
import Pagination from "./pagination";
import getArrayFromInfo from "./compute/getArrayFromInfo";
import getArrayFromAllCard from "./compute/getArrayFromCard";

const MainFilters = () => {
  const dispatch = useAppDispatch();
  //вытаскиваю из стора
  const card = useAppSelector(getAllCard);
  const info = useAppSelector(getInfo);
  const arrOfCards: any[] = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [countPerPage] = useState(40);
  const arrOfInfo: any[] = [];
  const cost = ["0", "1", "2", "3", "4", "5", "6", "7+"];
  const format = ["Стандарт", "Вольный"];

  getArrayFromInfo(info, arrOfInfo);
  getArrayFromAllCard(card, arrOfCards);

  useEffect(() => {
    //запрашиваешь что-то загружаешь
    dispatch(loadCardsByFaction("Neutral"));
    dispatch(loadCardsInfo());
  }, [dispatch]);

  const lastCardIndex = currentPage * countPerPage;
  const firstCardIndex = lastCardIndex - countPerPage;
  const countCards = arrOfCards.slice(firstCardIndex, lastCardIndex);
  const [value, setValue] = useState("");

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);
  const filteredCards = arrOfCards.filter((el) => {
    return value.toLowerCase() === ""
      ? el
      : el.name.toLowerCase().includes(value.toLowerCase());
  });
  const handleClick = (el: any) => {
    return el;
  };

  return (
    <>
      <h1 className="header-text">HEARTHSTONE СПИСОК КАРТ</h1>
      <div className="filter-container">
        <div>
          <p className="form-input_header">Поиск</p>
          <InputGroup className="mb-3 form-input">
            <Form.Control
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => setValue(e.target.value)}
            />
          </InputGroup>
        </div>
        <FormFiltersCost name="Стоимость" cost={cost} />
        <FormFiltersFormat name="Формат" format={format} />
        <FormFilters
          name="Редкость"
          filter_param="qualities"
          arrOfInfo={arrOfInfo}
        />
        <FormFilters name="Тип" filter_param="types" arrOfInfo={arrOfInfo} />
        <FormFilters
          name="Класс"
          filter_param="classes"
          arrOfInfo={arrOfInfo}
        />
        <FormFilters name="Сет" filter_param="sets" arrOfInfo={arrOfInfo} />
        <FormFilters name="Раса" filter_param="races" arrOfInfo={arrOfInfo} />
        <Button
          className="filter-btn_apply"
          variant="dark"
          onClick={(el) => handleClick(el)}
        >
          Фильтр
        </Button>
      </div>
      <div className="cards-container">
        {filteredCards.length > 0 ? (
          <>
            {filteredCards.map((el, i) => (
              <div key={i}>
                <p>
                  <a href={"/" + el.id}>
                    <img
                      className="card-display"
                      src={el.img}
                      alt={el.name}
                    ></img>
                  </a>
                </p>
              </div>
            ))}
            <Pagination
              countPerPage={countCards.length}
              totalCards={filteredCards.length}
              paginate={paginate}
            />
            <div>
              <Button
                variant="dark"
                className="page-btn_next"
                onClick={prevPage}
              >
                Предыдущая страница
              </Button>
              <Button
                variant="dark"
                className="page-btn_next"
                onClick={nextPage}
              >
                Следующая страница
              </Button>
            </div>
          </>
        ) : (
          <Spinner animation="border" className="card-display_loading" />
        )}
      </div>
    </>
  );
};

export { MainFilters };
