class Cell {
  position;
  isAlive;

  constructor(position, isAlive) {
    this.position = position;
    this.isAlive = isAlive;
  }

  getAliveNeighbors(board) {
    this.neighbors =
      board[this.position[0] - 1][this.position[1] - 1] +
      board[this.position[0] - 1][this.position[1] + 0] +
      board[this.position[0] - 1][this.position[1] + 1] +
      board[this.position[0] + 0][this.position[1] - 1] +
      board[this.position[0] + 0][this.position[1] + 0] +
      board[this.position[0] + 0][this.position[1] + 1] +
      board[this.position[0] + 1][this.position[1] - 1] +
      board[this.position[0] + 1][this.position[1] + 0] +
      board[this.position[0] + 1][this.position[1] + 1];
  }
}

export default Cell;
