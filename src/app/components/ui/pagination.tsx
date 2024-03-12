import { Pagination } from "react-bootstrap";

interface PaginationProps {
  itemsCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}

const PaginationComponent = ({
  itemsCount,
  pageSize,
  onPageChange,
  currentPage,
}: PaginationProps) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <div className="d-flex justify-content-center mt-3">
      <Pagination>
        <Pagination.First
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {pages.map((page) => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === pageCount}
        />
        <Pagination.Last
          onClick={() => onPageChange(pageCount)}
          disabled={currentPage === pageCount}
        />
      </Pagination>
    </div>
  );
};

export { PaginationComponent };
