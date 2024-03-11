import React, {ChangeEvent, useEffect, useState} from 'react';
import {ItemsPerPage, PaginationBody} from './index';
import {Container, Pagination} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "#hooks";
import {getCardsLoadingStatus} from "#store";

const getRange = (start: number, end: number) => {
  return Array(end - start + 1)
    .fill(end - start + 1)
    .map((el, indexCurrentElement) => indexCurrentElement + start);
};

const PaginationContainer = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getCardsLoadingStatus);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(16);
  //totalCount достать
  //const totalCount = AppSelector();
  const totalCount = 2000;

  const totalPages = Math.ceil(totalCount / itemsPerPage);

  //тут я в стейт занесу данные, которые Кирилл укажет как зависимости при отображении карточек
/*  useEffect(() => {
    dispatch(setPagination(itemsPerPage, currentPage));
  }, [currentPage, itemsPerPage, dispatch]);*/

  //если поменялись зависимости (набор, например)
  //я так понимаю в зависимостях будут поля, по которым меняется фильтр или поиск
  //тут моя пагинация зависит от данных Кирилла
/*  useEffect(() => {
    setCurrentPage(1);
  }, []);*/

  const prevPage = () => {
    return currentPage > 1
      ? setCurrentPage(currentPage - 1)
      : 1;
  };
  const nextPage = () => {
    return currentPage < totalPages
      ? setCurrentPage(currentPage + 1)
      : 1;
  };
  const firstPage = () => {
    setCurrentPage(1);
  };
  const lastPage = () => {
    setCurrentPage(totalPages);
  };
  const onChangeHandlerRange = (e: ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(+e.currentTarget.value);
  };

    let delta: number;
    if (totalPages <= 7) {
      // delta === 7: [1 2 3 4 5 6 7]
      delta = 7;
    } else {
      // delta === 2: [1 ... 4 5 6 ... 10]
      // delta === 4: [1 2 3 4 5 ... 10]
      delta = currentPage > 4 && currentPage < totalPages - 3 ? 2 : 4;
    }

/*  let delta = totalPages <= 7 ? 7
    : currentPage > 4 && currentPage < totalPages - 3 ? 2 : 4;*/

  const range = {
    start: Math.round(currentPage - delta / 2),
    end: Math.round(currentPage + delta / 2),
  };

  if (range.start - 1 === 1 || range.end + 1 === totalPages) {
    range.start += 1;
    range.end += 1;
  }
  let pages: Array<number | 'dots'> =
    currentPage > delta
      ? getRange(Math.min(range.start, totalPages - delta), Math.min(range.end, totalPages))
      : getRange(1, Math.min(totalPages, delta + 1));

  const withDots = (value: number, pair: Array<number | 'dots'>) => (pages.length + 1 !== totalPages ? pair : [value]);

  if (pages[0] !== 1) {
    pages = withDots(1, [1, 'dots']).concat(pages);
  }

  if (pages[pages.length - 1] < totalPages) {
    pages = pages.concat(withDots(totalPages, ['dots', totalPages]));
  }

  return (
    <Container className="d-flex">
      <Pagination className="m-0 align-items-center">
        <Pagination.First disabled={isLoading} onClick={firstPage}/>
        <Pagination.Prev disabled={isLoading} onClick={prevPage}/>
        <PaginationBody currentPage={currentPage}
                        isLoading={isLoading}
                        pages={pages}
                        setCurrentPage={setCurrentPage}/>
        <Pagination.Next disabled={isLoading} onClick={nextPage}/>
        <Pagination.Last disabled={isLoading} onClick={lastPage}/>
      </Pagination>
      <ItemsPerPage onChangeHandlerRange={onChangeHandlerRange} isLoading={isLoading}/>
    </Container>
  );
};

export { PaginationContainer };
