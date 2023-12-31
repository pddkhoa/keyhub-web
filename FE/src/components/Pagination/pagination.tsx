import { nanoid } from "nanoid";
import { FC, memo } from "react";
import ReactPaginate from "react-paginate";

type PaginationProps = {
  page: number;
  maxPage: number;
  setPage: (page: number) => void | any;
};

const Pagination: FC<PaginationProps> = ({ page, maxPage, setPage }) => {
  const currentPage = Math.max(page - 1, 0);

  const onPageChange = ({ selected = 1 }) => {
    const pageSelected = Math.max(selected + 1, 1);
    setPage(pageSelected);
  };

  return (
    <ReactPaginate
      key={nanoid()}
      forcePage={currentPage}
      onPageChange={onPageChange}
      containerClassName="flex text-sm space-x-4 w-fit"
      pageRangeDisplayed={0}
      pageCount={maxPage}
      renderOnZeroPageCount={null}
      nextLabel={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      }
      previousLabel={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            clipRule="evenodd"
          />
        </svg>
      }
      nextLinkClassName="h-7 w-7 flex border-0 items-center justify-center text-white rounded border  hover:text-white transition-colors duration-300 dark:bg-black"
      previousLinkClassName="h-7 w-7 flex border-0 items-center justify-center text-white rounded border  hover:text-white transition-colors duration-300 dark:bg-black"
      pageClassName="w-fit h-fit rounded border-0 hover:bg-gray-800  dark:hover:bg-gray-800 text-white hover:text-white transition-colors duration-300 dark:bg-black"
      pageLinkClassName="w-7 h-7 text-white flex  justify-center items-center "
      breakClassName=""
      activeClassName="border-0  text-white bg-gray-800 text-white hover:bg-gray-800 hover:text-white duration-300 dark:bg-white"
      breakLabel="..."
      breakLinkClassName="text-white"
    />
  );
};

export default memo(Pagination);
