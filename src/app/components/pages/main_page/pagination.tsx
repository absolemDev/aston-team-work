import { paginationNumbers } from "./interfaces";

const Pagination = ({ countPerPage, totalCards, paginate }: paginationNumbers) => {
  const pageNumbers: number[] = [];
  for (let i: number = 1; i <= Math.ceil(totalCards / countPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination-container">
      <ul className="pagination">
        {pageNumbers.map((el) => (
          <li className="page-item" key={el}>
            <a href="!#" className="page-link" onClick={() => paginate(el)}>
              {el}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
