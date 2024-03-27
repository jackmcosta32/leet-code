// Each array inside board represents one 3x3 grid
// The 3 first arrays inside board represents the first group of grids
// Each cell position is mapped from [0 ... 9] starting from the top left position to the bottom right

type TNumberHashSet = Record<string, string>[];

const GRID_SIZE = 3;
const BOARD_SIZE = 9;

const ROWS = Array.from({ length: BOARD_SIZE }).map(
  () => ({})
) as TNumberHashSet;

const GRIDS = Array.from({ length: BOARD_SIZE }).map(
  () => ({})
) as TNumberHashSet;

const COLUMNS = Array.from({ length: BOARD_SIZE }).map(
  () => ({})
) as TNumberHashSet;

function isValidSudoku(board: string[][]): boolean {
  for (let r = 0; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      const value = board[r][c];

      if (value === ".") continue;

      const g =
        Math.floor(c / GRID_SIZE) + Math.floor(r / GRID_SIZE) * GRID_SIZE;

      const hasDuplicattedRowValues = value in ROWS[r];
      const hasDuplicattedColumnValues = value in COLUMNS[c];
      const hasDuplicattedGridValues = value in GRIDS[g];

      if (
        hasDuplicattedRowValues ||
        hasDuplicattedColumnValues ||
        hasDuplicattedGridValues
      ) {
        console.log({
          r,
          c,
          g,
          ROWS,
          COLUMNS,
          GRIDS,
        });
        return false;
      }

      ROWS[r][value] = value;
      GRIDS[g][value] = value;
      COLUMNS[c][value] = value;
    }
  }

  return true;
}

const board = [
  [".", "8", "7", "6", "5", "4", "3", "2", "1"],
  ["2", ".", ".", ".", ".", ".", ".", ".", "."],
  ["3", ".", ".", ".", ".", ".", ".", ".", "."],
  ["4", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", ".", ".", ".", ".", ".", ".", ".", "."],
  ["6", ".", ".", ".", ".", ".", ".", ".", "."],
  ["7", ".", ".", ".", ".", ".", ".", ".", "."],
  ["8", ".", ".", ".", ".", ".", ".", ".", "."],
  ["9", ".", ".", ".", ".", ".", ".", ".", "."],
];

console.log(isValidSudoku(board));
