import Cell from "./cell";

const rows = 10;
const columns = 10;

const board = new Array(rows).fill("").map((item, x) =>
  Array(columns)
    .fill("")
    .map((item, y) => new Cell([x, y], Math.ceil(Math.random()) === 1))
);

console.log(board);

board.forEach((column) => column.forEach((cell) => cell.updateState()));
