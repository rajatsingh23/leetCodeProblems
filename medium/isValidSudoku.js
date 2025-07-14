// var isValidSudoku = function(board) {
//     const rows = Array.from({ length: 9 }, () => new Set());
//     const cols = Array.from({ length: 9 }, () => new Set());
//     const boxes = Array.from({ length: 9 }, () => new Set());

//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             const val = board[i][j];
//             if (val === '.') continue;

//             const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

//             if (rows[i].has(val) || cols[j].has(val) || boxes[boxIndex].has(val)) {
//                 return false;
//             }

//             rows[i].add(val);
//             cols[j].add(val);
//             boxes[boxIndex].add(val);
//         }
//     }

//     return true;
// };


//solution

var isValidSudoku = function(board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const val = board[i][j];
            if (val === '.') continue;

            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if (rows[i].has(val) || cols[j].has(val) || boxes[boxIndex].has(val)) {
                return false;
            }

            rows[i].add(val);
            cols[j].add(val);
            boxes[boxIndex].add(val);
        }
    }

    return true;
};
