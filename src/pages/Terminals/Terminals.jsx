import React, { Component } from 'react';
import TerminalForm from './components/TerminalForm';
import TerminalTable from './components/TerminalTable';

import { v4 as uuidv4 } from 'uuid';

export default class Terminal extends Component {
  state = {
    terminalsArr: [
      {
        id: uuidv4(),
        name: 'Terminal1',
        description: 'This is Terminal1'
      },
      {
        id: uuidv4(),
        name: 'Terminal2',
        description: 'This is Terminal2'
      },
      {
        id: uuidv4(),
        name: 'Terminal3',
        description: 'This is Terminal3'
      }
    ],
  };

  addTerminal = (terminalName, terminalDescription) => {    
    const { terminalsArr } = this.state;   

    const newTerminal = {
      id: uuidv4(),
      name: terminalName,
      description: terminalDescription
    };

    const newTerminalsArr = [
      ...terminalsArr,
      newTerminal
    ];

    this.setState({
      terminalsArr: newTerminalsArr
    });
  };

  removeTerminal = (terminalId) => {    
    const { terminalsArr } = this.state;
    const newTerminalsArr = [...terminalsArr]
      .filter((terminal) => terminal.id !== terminalId);

    this.setState({
      terminalsArr: newTerminalsArr
    });
  };

  render() {
    const { terminalsArr } = this.state;
    return (
      <>
        <TerminalForm
          addTerminal={this.addTerminal}/>
        <TerminalTable
          terminalsArr={terminalsArr}
          removeTerminal={this.removeTerminal} />
      </>
    );
  }  
}