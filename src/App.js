import React from 'react';
import './App.css';
import Table from './body.componant.js/Table';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      next: true,
      status: 'PLAY NOW',
      stepNumber: 0,
    };
  }

  handelClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.next ? '🍎' : '🍏';
    const status = `THE NEXT IS ${this.state.next ? '🍏' : '🍎'}`;

    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      next: !this.state.next,
      status: status,
    })
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    let status = this.state.status;

    if (winner) {
      status = `THE WINNER IS ${winner}`
    }

    return (
      <div className="App">
        <header className="Header">
          <h1>TIC-TAC TOE</h1>
        </header>
        <body className="Body">
          <h1 className="Status">{status}</h1>

          <Table
            squares={current.squares}
            onClick={(i) => this.handelClick(i)} />

          <div className="Button-return">
            {history.length >1 && 
              <div 
              className="Arriere"
              onClick={()=>this.onGoback()}
              >↶</div>}
            {
              !current && <div className="Avant">↷</div>
              }
          </div>
          {history.length}

        </body>
        <footer className="Footer">
          <p>Application en cours de construction</p>
        </footer>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
