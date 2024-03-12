import { PaginationBody } from "./index";
import { Container, Pagination } from "react-bootstrap";
import { getDelta, getRangeTemplate } from "#utils";

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
  const totalPages = Math.ceil(itemsCount / pageSize);

  const prevPage = () => {
    return currentPage > 1 ? onPageChange(currentPage - 1) : 1;
  };
  const nextPage = () => {
    return currentPage < totalPages ? onPageChange(currentPage + 1) : 1;
  };
  const firstPage = () => {
    onPageChange(1);
  };
  const lastPage = () => {
    onPageChange(totalPages);
  };

  let delta = getDelta(totalPages, currentPage);
  const pages = getRangeTemplate(currentPage, delta, totalPages);

  if (pages.length < 2) return null;

  return (
    <Container className="d-flex my-3 justify-content-center">
      <Pagination className="m-0 align-items-center">
        <Pagination.First disabled={currentPage === 1} onClick={firstPage} />
        <Pagination.Prev disabled={currentPage === 1} onClick={prevPage} />
        <PaginationBody
          currentPage={currentPage}
          pages={pages}
          onPageChange={onPageChange}
        />
        <Pagination.Next
          disabled={currentPage === totalPages}
          onClick={nextPage}
        />
        <Pagination.Last
          disabled={currentPage === totalPages}
          onClick={lastPage}
        />
      </Pagination>
    </Container>
  );
};

export { PaginationContainer };
