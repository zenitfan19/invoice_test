import React from 'react';

import { v4 as uuidv4 } from 'uuid';

const TablePagination = ({ currentPage, totalPages, changeCurrPage }) => {
  const paginationElements = new Array(totalPages).fill(null).map((el, index) => {
    const classTitle = currentPage === index ? 'pagination-item active' : 'pagination-item';
    return (
      <div 
        className={classTitle}
        key={uuidv4()}
        onClick={() => changeCurrPage(index)}>
          {index + 1}
      </div>
    );
  });  
  
  return (
    <div className="pagination">
      {paginationElements}
    </div>
  );
};

export default TablePagination;