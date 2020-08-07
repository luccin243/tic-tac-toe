import React from 'react';
import '../body.componant.style/Square.css';

function Square(props) {
    return (
        <td className="Square"
            onClick={() => props.onClick()} >
            {props.value}
        </td>
    )
}

export default Square;