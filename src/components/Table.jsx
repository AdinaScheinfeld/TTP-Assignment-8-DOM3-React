import React, { Component } from 'react';
import { TableRow } from './index';

class Table extends Component {
    
    // state
    state = { 
        numRows: 1,
        numCols: 1,
        color: 'white'
     }

    // method to change a cell's color when the cell is clicked
    changeColor = (e) => {
        e.target.style.backgroundColor = this.state.color;
    }

    // method to add a row to the table
    addRow = () => {
        this.setState({ numRows: this.state.numRows+1 })
    }

    // method to add a column to the table
    addColumn = () => {
        this.setState({ numCols: this.state.numCols+1 })
    }

    // method to update the state with the color selected from the menue
    selectColor = (e) => {
        this.setState({ color: e.target.value })
    }

    // render
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