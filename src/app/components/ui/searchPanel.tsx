import { ChangeEventHandler, useCallback, useMemo, useState } from "react";
import { ButtonMemo, InputGroupMemo } from "..";
import { Col, Row } from "react-bootstrap";
import { SelectMemo } from "../common/form/select";
import { useAppSelector } from "../../hooks";
import { getFilters } from "../../store";
import { useNavigate } from "react-router-dom";
import { getSearchParams } from "../../utils/getSearchParams";

const SearchPanel = () => {
  const [searchParams, setSearchParams] = useState({
    name: "",
    cost: "",
    format: "",
    quality: "",
    type: "",
    classe: "",
    race: "",
    set: "Base",
  });
  const costs = useMemo(() => ["0", "1", "2", "3", "4", "5", "6", "7+"], []);
  const formats = useMemo(() => ["Стандарт", "Вольный"], []);
  const { qualities, types, classes, races, sets } = useAppSelector(getFilters);
  const navigate = useNavigate();

  const handleSearch = (): void => {
    navigate({ pathname: "search", search: getSearchParams(searchParams) });
  };

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> =
    useCallback(({ target }) => {
      setSearchParams((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }, []);

  return (
    <Row>
      <Col
        md={{ span: 6, offset: 3 }}
        className="border border-black pb-2 pt-2"
      >
        <SelectMemo
          id="set"
          value={searchParams.set}
          options={sets}
          onChange={handleChange}
          label="Набор"
        />
        <InputGroupMemo
          id="name"
          value={searchParams.name}
          onChange={handleChange}
          label="Название"
        />
        <Row className="mb-3">
          <SelectMemo
            id="cost"
            value={searchParams.cost}
            options={costs}
            defaultOption="Любая стоимость"
            onChange={handleChange}
            label="Стоимость маны"
          />
          <SelectMemo
            id="format"
            value={searchParams.format}
            options={formats}
            defaultOption="Любой формат"
            onChange={handleChange}
            label="Формат"
          />
        </Row>
        <Row className="mb-3">
          <SelectMemo
            id="quality"
            value={searchParams.quality}
            options={qualities}
            defaultOption="Любая редкость"
            onChange={handleChange}
            label="Редкость"
          />
          <SelectMemo
            id="type"
            value={searchParams.type}
            options={types}
            defaultOption="Любой Тип"
            onChange={handleChange}
            label="Тип"
          />
        </Row>
        <Row className="mb-3">
          <SelectMemo
            id="classe"
            value={searchParams.classe}
            options={classes}
            defaultOption="Любой класс"
            onChange={handleChange}
            label="Класс"
          />
          <SelectMemo
            id="race"
            value={searchParams.race}
            options={races}
            defaultOption="Любая раса"
            onChange={handleChange}
            label="Раса"
          />
        </Row>
        <ButtonMemo variant="dark" stretch onClick={handleSearch}>
          Поиск
        </ButtonMemo>
      </Col>
    </Row>
  );
};

export { SearchPanel };
