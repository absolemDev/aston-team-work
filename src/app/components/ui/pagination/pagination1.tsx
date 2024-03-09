import React, {ChangeEvent} from 'react';
/*import {ItemsPerPage, PaginationBody} from './index';
import {Container, Pagination} from "react-bootstrap";

type PaginationPropsType = {
  totalPages: number
  currentPage: number
  isLoading: boolean
  setPageCount: (rangePages: number) => void
  setCurrentPage: (pageCount: number) => void
  prevPage: () => void
  nextPage: () => void
}

const getRange = (start: number, end: number) => {
  return Array(end - start + 1)
    .fill(end - start + 1)
    .map((el, indexCurrentElement) => indexCurrentElement + start);
};

const Pagination1 = ({ totalPages,
  currentPage,
  isLoading ,
  setPageCount,
  setCurrentPage,
  prevPage,
  nextPage}: PaginationPropsType) => {

  const onChangeHandlerRange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPageCount(+e.currentTarget.value);
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
  const range = {
    start: Math.round(currentPage - delta / 2),
    end: Math.round(currentPage + delta / 2),
  };

  if (range.start - 1 === 1 || range.end + 1 === totalPages) {
    range.start += 1;
    range.end += 1;
  }
  let pages: any =
    currentPage > delta
      ? getRange(Math.min(range.start, totalPages - delta), Math.min(range.end, totalPages))
      : getRange(1, Math.min(totalPages, delta + 1));

  const withDots = (value: number, pair: Array<any>) => (pages.length + 1 !== totalPages ? pair : [value]);

  if (pages[0] !== 1) {
    pages = withDots(1, [1, '...']).concat(pages);
  }

  if (pages[pages.length - 1] < totalPages) {
    pages = pages.concat(withDots(totalPages, ['...', totalPages]));
  }
  return (
    <Container className="d-flex">
      <Pagination className="m-0 align-items-center">
        <Pagination.First disabled={isLoading} onClick={()=>{}}/>
        <Pagination.Prev disabled={isLoading} onClick={prevPage}/>
        <PaginationBody currentPage={currentPage}
                        isLoading={isLoading}
                        pages={pages}
                        setCurrentPage={setCurrentPage}/>
        <Pagination.Next disabled={isLoading} onClick={nextPage}/>
        <Pagination.Last disabled={isLoading} onClick={()=>{}}/>
      </Pagination>
      <ItemsPerPage onChangeHandlerRange={onChangeHandlerRange} isLoading={isLoading}/>
    </Container>
  );
};

export { Pagination1 };*/
