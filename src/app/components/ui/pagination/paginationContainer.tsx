import React from 'react';
import {PaginationBody} from './index';
import {Container, Pagination} from "react-bootstrap";
import {useAppSelector} from "#hooks";
import {getCardsLoadingStatus} from "#store";
import {getDelta} from "../../../utils/index";
import {getRangeTemplate} from "../../../utils/index";

interface PaginationProps {
  itemsCount: number;
  onPageChange: (page: number) => void;
  currentPage: number;
  pageSize: number;
}

const PaginationContainer = ({
                               itemsCount,
                               onPageChange,
                               currentPage,
                               pageSize,
                             }: PaginationProps) => {
  const isLoading = useAppSelector(getCardsLoadingStatus);
  const totalPages = Math.ceil(itemsCount / pageSize);

  const prevPage = () => {
    return currentPage > 1
      ? onPageChange(currentPage - 1)
      : 1;
  };
  const nextPage = () => {
    return currentPage < totalPages
      ? onPageChange(currentPage + 1)
      : 1;
  };
  const firstPage = () => {
    onPageChange(1);
  };
  const lastPage = () => {
    onPageChange(totalPages);
  };

  let delta = getDelta(totalPages, currentPage);
  const pages = getRangeTemplate(currentPage, delta, totalPages);

  return (
    <Container className="d-flex my-3 justify-content-center">
      <Pagination className="m-0 align-items-center">
        <Pagination.First disabled={isLoading} onClick={firstPage}/>
        <Pagination.Prev disabled={isLoading} onClick={prevPage}/>
        <PaginationBody currentPage={currentPage}
                        isLoading={isLoading}
                        pages={pages}
                        onPageChange={onPageChange}/>
        <Pagination.Next disabled={isLoading} onClick={nextPage}/>
        <Pagination.Last disabled={isLoading} onClick={lastPage}/>
      </Pagination>
    </Container>
  );
};

export { PaginationContainer };
