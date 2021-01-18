import React, { Component } from 'react';
import { TableRow, TableCell } from './index';

class Table extends Component {
    state = { 
        numRows: 1,
        numCols: 1,
        color: 'white'
     }

    changeColor = () => {
        console.log('hello');
    }

    render() { 

        let totalRows = [];
        for(let i=0; i<this.state.numRows; i++){
            totalRows.push(<TableRow numColumns={ this.state.numCols } changeColor={this.changeColor} />);
        }

        return ( 
            <div className='container'>
                <table className='tableContainer'>{ totalRows }</table>
            </div>
         );
    }
}
 
export default Table;