import React from 'react';

const RowsByPageSelector = ({ changeRowsByPage, rowsByPage }) => {
  return (
    <div className="selector-wrapper">
      <p>Строк:</p>
      <select
        name="rowsByPage"
        onChange={changeRowsByPage}
        defaultValue={rowsByPage}>
        <option value="5">5 / страница</option> 
        <option value="10">10 / страница</option>
        <option value="15">15 / страница</option>
      </select> 
    </div>
  );
};

export default RowsByPageSelector;