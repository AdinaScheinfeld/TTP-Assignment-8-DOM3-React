import React from 'react';
import { TableCell } from './index';

const TableRow = (props) => {

    let totalCols = [];
    for(let i=0; i<props.numColumns; i++){
        totalCols.push(<TableCell changeColor={ props.changeColor } />);
    }
    return ( 
        <tr>{ totalCols }</tr>
    );
}
 
export default TableRow;