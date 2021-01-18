import React from 'react';
import './TableCell.css';

const TableCell = (props) => {
    return ( 
        <td onClick={props.changeColor}> </td>
     );
}
 
export default TableCell;

