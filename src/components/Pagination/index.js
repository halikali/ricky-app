import React from "react";

import { useSelector, useDispatch } from "react-redux/";
import { setActivePage } from "Slices/PageSlice";
import PaginationNumber from "./PaginationNumber";

const Pagination = () => {
  const dispatch = useDispatch();
  const totalPage = useSelector((state) => state.page.totalPage);
  const activePage = useSelector((state) => state.page.activePage);

  const increasePage = () => {
    dispatch(setActivePage(activePage + 1));
  };

  const decreasePage = () => {
    dispatch(setActivePage(activePage - 1));
  };

  const handleClick = (e) => {
    e.target.innerText > 0 && dispatch(setActivePage(+e.target.innerText));

    e.target.innerText === "<" && activePage > 1 && decreasePage();

    e.target.innerText === ">" && activePage < totalPage && increasePage();
  };

  return (
    <div
      className="flex gap-2 justify-center 
                py-5 
                child:w-7 child:h-7 child:border child:border-blue-500 child:text-center child:leading-7 child:cursor-pointer child:font-bold"
      onClick={(e) => handleClick(e)}
    >
      {activePage < 4 && (
        <>
          <PaginationNumber text={"<"} />
          <PaginationNumber text={1} />
          <PaginationNumber text={2} />
          <PaginationNumber text={3} />
          <PaginationNumber text={4} />
          <PaginationNumber text={"..."} />
          <PaginationNumber text={">"} />
        </>
      )}

      {activePage >= 4 && activePage < totalPage - 3 && (
        <>
          <PaginationNumber text={"<"} />
          <PaginationNumber text={activePage - 2} />
          <PaginationNumber text={activePage - 1} />
          <PaginationNumber text={activePage} />
          <PaginationNumber text={activePage + 1} />
          <PaginationNumber text={"..."} />
          <PaginationNumber text={totalPage - 2} />
          <PaginationNumber text={totalPage - 1} />
          <PaginationNumber text={totalPage} />
          <PaginationNumber text={">"} />
        </>
      )}

      {activePage >= totalPage - 3 && (
        <>
          <PaginationNumber text={"<"} />
          <PaginationNumber text={totalPage / 2 - 2} />
          <PaginationNumber text={totalPage / 2 - 1} />
          <PaginationNumber text={totalPage / 2} />
          <PaginationNumber text={totalPage / 2 + 1} />
          <PaginationNumber text={"..."} />
          <PaginationNumber text={totalPage - 3} />
          <PaginationNumber text={totalPage - 2} />
          <PaginationNumber text={totalPage - 1} />
          <PaginationNumber text={totalPage} />
          <PaginationNumber text={">"} />
        </>
      )}
    </div>
  );
};

export default Pagination;
