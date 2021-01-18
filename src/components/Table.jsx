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

    addColumn = () => {
        console.log('add column');
        this.setState({ numCols: this.state.numCols+1 })
    }

    selectColor = (e) => {
        console.log('target: '+e.target.value);
        this.setState({ color: e.target.value })
        console.log('state: '+this.state.color);
    }

    render() { 

        let totalRows = [];
        for(let i=0; i<this.state.numRows; i++){
            totalRows.push(<TableRow numColumns={ this.state.numCols } changeColor={this.changeColor} />);
        }

        return ( 
            <div className='container'>
                <div className='buttons'>
                    <button onClick={ this.addRow }>Add Row</button>
                    <button onClick={ this.addColumn }>Add Column</button>
                </div>

                <form>
                    <label for='colors'>Select a color: </label>
                    <select name='colors' id='colors' onChange={ this.selectColor }>
                        <option value='white' id='white'>white</option>
                        <option value='red' id='red'>red</option>
                        <option value='yellow' id='yellow'>yellow</option>
                        <option value='blue' id='blue'>blue</option>
                    </select>
                </form>

                <table className='tableContainer'>{ totalRows }</table>
            </div>
         );
    }
}
 
export default Table;