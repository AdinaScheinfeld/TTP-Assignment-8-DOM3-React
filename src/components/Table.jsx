import React, { Component } from 'react';
import { TableRow, TableCell } from './index';

class Table extends Component {
    state = { 
        numRows: 1,
        numCols: 1,
        color: 'white'
     }

    changeColor = () => {
        console.log('change color');
    }

    addRow = () => {
        this.setState({ numRows: this.state.numRows+1 })
    }

    render() { 

        let totalRows = [];
        for(let i=0; i<this.state.numRows; i++){
            totalRows.push(<TableRow numColumns={ this.state.numCols } changeColor={this.changeColor} />);
        }

        return ( 
            <div className='container'>
                <div className='buttons'>
                    <button onClick={this.addRow}>Add Row</button>
                </div>
                <table className='tableContainer'>{ totalRows }</table>
            </div>
         );
    }
}
 
export default Table;