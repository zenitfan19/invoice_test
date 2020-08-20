import React from 'react';

const TerminalTable = ({ terminalsArr, removeTerminal }) => {
  const terminalsRows = terminalsArr.map((terminal, index) => {
    const { id, name, description } = terminal;
    return (    
      <tr key={id}>
        <td
          title={`real ID: ${id}`}>
            {index+1}
        </td>
        <td>{name}</td>
        <td>{description}</td>
        <td>
          <button
            className="btn btn_del"
            onClick={() => removeTerminal(id)}>
              Del
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {terminalsRows}
        </tbody>      
    </table> 
    </div>          
  );
};

export default TerminalTable;