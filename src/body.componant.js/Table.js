import React from 'react';
import '../body.componant.style/Table.css';
import Square from './Square';

class Table extends React.Component {

    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <table className="Table">
                    <tr className="Line">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </tr>
                    <tr className="Line">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </tr>
                    <tr className="Line">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </tr>
                </table>
            </div>
        );
    }
}

export default Table;