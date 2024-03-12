import React from 'react';
import {Pagination} from "react-bootstrap";
import {GetRangeTemplateType, SEPARATOR} from "#utils";

type PaginationBodyProps = {
  pages: Array<GetRangeTemplateType>,
  currentPage: number,
  onPageChange: (page: number)=>void,
  isLoading: boolean,
}

const PaginationBody = ({pages, currentPage, onPageChange, isLoading}:PaginationBodyProps) => {
  return (
    <>
      {pages.map((page: GetRangeTemplateType) => (
        (page !== SEPARATOR)
          ? <Pagination.Item key={page}
                             active = {page === currentPage}
                             onClick={() => onPageChange(page)}
                             disabled={isLoading}
          >{page}</Pagination.Item>
          : <Pagination.Ellipsis />
      ))}
    </>
  );
};

export { PaginationBody };
