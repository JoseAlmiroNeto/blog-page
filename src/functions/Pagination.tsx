"use client";

import React, { useState } from "react";

interface PaginationProps {
  items: JSX.Element[];
  itemsPerPage: number;
}

export function Pagination({ items, itemsPerPage }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="space-y-6">
      <div className="w-full flex flex-wrap gap-8">{currentItems}</div>
      <nav className="flex justify-center pt-5 border-t">
        <ul className="flex space-x-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`text-sm py-3 px-4 cursor-pointer rounded-xl ${
                currentPage === index + 1
                  ? "bg-zinc-200 text-black"
                  : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
