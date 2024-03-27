import collections
from typing import List


class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        BOARD_SIZE = 9
        SUB_BOX_SIZE = 3

        # Each column has a map of rows in which are stored the row values
        columns_map = [{} for i in range(BOARD_SIZE)]

        # Each row has a map of rows in which are stored the column values
        rows_map = [{} for i in range(BOARD_SIZE)]

        # A board has (BOARD_SIZE // SUB_BOX_SIZE) ** 2 grids or in this case
        # the index of the ith grid in grids_map should be:
        # g_index = (row // SUB_BOX_SIZE) * SUB_BOX_SIZE + (column // SUB_BOX_SIZE)
        grids_map = [{} for i in range(BOARD_SIZE)]

        for row in range(BOARD_SIZE):
            for column in range(BOARD_SIZE):
                cell_value = board[row][column]

                if cell_value == '.':
                    continue

                grid_index = (row // SUB_BOX_SIZE) * SUB_BOX_SIZE + (column // SUB_BOX_SIZE)

                if (
                    cell_value in rows_map[row]
                    or cell_value in columns_map[column]
                    or cell_value in grids_map[grid_index]
                ):
                    return False

                rows_map[row][cell_value] = 1
                columns_map[column][cell_value] = 1
                grids_map[grid_index][cell_value] = 1

        return True

    def optimizedIsValidSudoku(self, board: List[List[str]]) -> bool:
        BOARD_SIZE = 9
        SUB_BOX_SIZE = 3

        rows_map = collections.defaultdict(set)
        grids_map = collections.defaultdict(set)
        columns_map = collections.defaultdict(set)

        for row in range(BOARD_SIZE):
            for column in range(BOARD_SIZE):
                cell_value = board[row][column]

                if cell_value == '.':
                    continue

                if (
                    cell_value in rows_map[row]
                    or cell_value in columns_map[column]
                    or cell_value in grids_map[(row // SUB_BOX_SIZE, column // SUB_BOX_SIZE)]
                ):
                    return False

                rows_map[row].add(cell_value)
                columns_map[column].add(cell_value)
                grids_map[(row // SUB_BOX_SIZE, column // SUB_BOX_SIZE)].add(cell_value)

        return True
