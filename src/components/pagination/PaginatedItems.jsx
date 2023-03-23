import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { ItemsToPaginate } from "./ItemsToPaginate";

export const PaginatedItems = ({ itemsPerPage, list }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = list.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(list.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % list.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <ItemsToPaginate currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        className="flex rounder gap-1  my-10 justify-center items-center text-blue-900"
        pageClassName="p-4 cursor-pointer hover:text-yellow-500  "
        activeClassName="bg-blue-900 text-white hover:text-white"
        previousClassName="p-3 rounded-l-xl outline-slate-400 outline-2 outline"
        nextClassName="p-3 rounded-r-xl outline-slate-400 outline-2 outline"
      />
    </>
  );
};
