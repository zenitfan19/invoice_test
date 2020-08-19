import React from 'react';

import { v4 as uuidv4 } from 'uuid';

const TablePagination = ({ currentPage, totalPages, changeCurrPage }) => {
  const paginationElements = new Array(totalPages).fill(null).map((el, index) => (
    <span 
      key={uuidv4()}
      onClick={() => changeCurrPage(index)}>
        {index + 1}
    </span>
  ));  
  
  return (
    <div>
      {paginationElements}
    </div>
  );
};

export default TablePagination;