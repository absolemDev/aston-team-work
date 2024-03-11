import { ChangeEventHandler, memo, useMemo } from "react";
import { InputGroupMemo } from "..";
import { Accordion, Row } from "react-bootstrap";
import { SelectMemo } from "../common/form/select";
import { useAppSelector } from "../../hooks";
import { getFilters } from "../../store";

interface FilterParams {
  [key: string]: string;
  name: string;
  cost: string;
  format: string;
  rarity: string;
  type: string;
  playerClass: string;
  race: string;
}

interface FilterPanelProps {
  filterParams: FilterParams;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
}

const FilterPanel = ({ filterParams, handleChange }: FilterPanelProps) => {
  const costs = useMemo(() => ["0", "1", "2", "3", "4", "5", "6", "7+"], []);
  const { qualities, types, classes, races } = useAppSelector(getFilters);
  return (
    <>
      <InputGroupMemo
        id="name"
        value={filterParams.name}
        onChange={handleChange}
        label="Название"
      />
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Фильтры</Accordion.Header>
          <Accordion.Body>
            <Row className="mb-3">
              <SelectMemo
                id="cost"
                value={filterParams.cost}
                options={costs}
                defaultOption="Любая стоимость"
                onChange={handleChange}
                label="Стоимость маны"
              />
            </Row>
            <Row className="mb-3">
              <SelectMemo
                id="rarity"
                value={filterParams.rarity}
                options={qualities}
                defaultOption="Любая редкость"
                onChange={handleChange}
                label="Редкость"
              />
              <SelectMemo
                id="type"
                value={filterParams.type}
                options={types}
                defaultOption="Любой Тип"
                onChange={handleChange}
                label="Тип"
              />
            </Row>
            <Row className="mb-3">
              <SelectMemo
                id="playerClass"
                value={filterParams.playerClass}
                options={classes}
                defaultOption="Любой класс"
                onChange={handleChange}
                label="Класс"
              />
              <SelectMemo
                id="race"
                value={filterParams.race}
                options={races}
                defaultOption="Любая раса"
                onChange={handleChange}
                label="Раса"
              />
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

const FilterPanelMemo = memo(FilterPanel);

export { FilterPanelMemo };
