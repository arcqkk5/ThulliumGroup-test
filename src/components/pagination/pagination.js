import { Pagination } from "@mui/material";
import "./pagination.scss";

const Paginations = ({ photosPerPage, total, paginate }) => {
  const correctPagination = Math.ceil(total / photosPerPage);

  return (
    <Pagination
      count={correctPagination}
      showFirstButton
      showLastButton
      className="group__pagination"
      onChange={(_, page) => paginate(page)}
    />
  );
};

export default Paginations;
