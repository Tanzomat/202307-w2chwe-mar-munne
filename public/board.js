const rows = 10;
const columns = 10;

const board = new Array(rows).fill("").map(() =>
  Array(columns)
    .fill("")
    .map(() => Math.round(Math.random()))
);

console.log(board);
