import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TerminalForm from './components/TerminalForm';
import TerminalTable from './components/TerminalTable';
import defaultTerminals from '../../constants/DefaultTerminals';

import { v4 as uuidv4 } from 'uuid';

export default class Terminal extends Component {
  state = {
    terminalsArr: defaultTerminals,
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
    const { isLoggedIn }  = this.props;

    if (isLoggedIn) {
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
    return (
      <Redirect to="/login" />
    );    
  }  
}