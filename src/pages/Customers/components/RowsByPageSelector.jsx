import React from 'react';

const RowsByPageSelector = ({ changeRowsByPage, rowsByPage }) => {
  return (
    <>
      <p>Строк:</p>
      <select
        name="rowsByPage"
        onChange={changeRowsByPage}
        defaultValue={rowsByPage}>
        <option value="5">5 / страница</option> 
        <option value="10">10 / страница</option>
        <option value="15">15 / страница</option>
        <option value="30">30 / страница</option>
        <option value="50">50 / страница</option>
        <option value="100">100 / страница</option>
      </select> 
    </>
  );
};

export default RowsByPageSelector;