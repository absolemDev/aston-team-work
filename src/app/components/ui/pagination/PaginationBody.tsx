import { Pagination } from "react-bootstrap";
import { GetRangeTemplateType, SEPARATOR } from "#utils";

type PaginationBodyProps = {
  pages: Array<GetRangeTemplateType>;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const PaginationBody = ({
  pages,
  currentPage,
  onPageChange,
}: PaginationBodyProps) => {
  return (
    <>
      {pages.map((page: GetRangeTemplateType) =>
        page !== SEPARATOR ? (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Pagination.Item>
        ) : (
          <Pagination.Ellipsis />
        )
      )}
    </>
  );
};

export { PaginationBody };
