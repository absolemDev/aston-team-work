import { useAppDispatch, useAppSelector } from "#hooks";
import { useEffect } from "react";
import {
  // loadSingleCard,
  getCards,
  loadCardsByFaction,
} from "../../../store/slices/cards.slice";
import { FormFilters } from "./form.filter";

const MainFilters = () => {
  const dispatch = useAppDispatch();
  //вытаскиваю из стора
  const card = useAppSelector(getCards);

  useEffect(() => {
    //запрашиваешь что-то загружаешь
    dispatch(loadCardsByFaction("Neutral"));
  }, [dispatch]);
  console.log(card[0]);
  return (
    <>
      <FormFilters name="Классы" />
      <FormFilters name="Рассы" />
      <FormFilters name="Сеты"/>
    </>
  );
};

export { MainFilters };
