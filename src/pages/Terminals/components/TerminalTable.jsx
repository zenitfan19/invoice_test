import React from 'react';

const TerminalTable = ({ terminalsArr, removeTerminal }) => {
  const terminalsRows = terminalsArr.map((terminal) => {
    const { id, name, description } = terminal;
    return (    
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{description}</td>
        <td>
          <button
            onClick={() => removeTerminal(id)}>
              Del
          </button>
        </td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {terminalsRows}
      </tbody>      
    </table>
  );
};

export default TerminalTable;