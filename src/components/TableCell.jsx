import React from 'react';

const TableCell = (props) => {
    return ( 
        <td style={{ width: '20px', height: '20px', border: '2px solid black' }} onClick={props.changeColor}> </td>
     );
}
 
export default TableCell;

