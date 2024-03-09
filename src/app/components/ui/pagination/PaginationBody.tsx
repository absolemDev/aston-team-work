import React from 'react';
import {Pagination} from "react-bootstrap";

type PaginationBodyProps = {
  pages: Array<number | 'dots'>,
  currentPage: number,
  setCurrentPage: (page: number)=>void,
  isLoading: boolean,
}

const PaginationBody = ({pages, currentPage, setCurrentPage, isLoading}:PaginationBodyProps) => {
  return (
    <>
      {pages.map((page: number | 'dots') => (
        (page !== 'dots')
          ? <Pagination.Item key={page}
                             active = {page === currentPage}
                             onClick={() => setCurrentPage(page)}
                             disabled={isLoading
                             }>{page}</Pagination.Item>
          : <Pagination.Ellipsis />
      ))}
    </>
  );
};

export { PaginationBody };
