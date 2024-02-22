import _ from "lodash";
import { Link } from "react-router-dom";
const Pagination = (props) => {
  const {
    totalPage,
    pageSize,
    onChangePage,
    currentPage,
    onPreviousChange,
    onNextChange,
  } = props;

  const pages = Math.ceil(totalPage / pageSize);
//   console.log(totalMovies);
  if (pages === 1) return;
  const pagesArr = _.range(1, pages + 1);

  //   console.log(pages);

  return (
    <nav
      aria-label="Page navigation example"
      className="d-flex justify-content-center mt-3"
    >
      <ul className="pagination">
        <li className="page-item">
          <Link
            className="page-link"
            onClick={() => {
              onPreviousChange();
            }}
          >
            Previous
          </Link>
        </li>
        {pagesArr.map((page) => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <Link
              className="page-link"
              onClick={() => {
                onChangePage(page);
              }}
            >
              {page}
            </Link>
          </li>
        ))}
        <li className="page-item">
        <Link
            className="page-link"
            onClick={() => {
              onNextChange();
            }}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
