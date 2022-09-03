export default function createMatrix(colums, row){
    let getEmptyBoard = [];
    const r = new Array(colums + 2).fill(1);
    getEmptyBoard.push(r);

    for (let i = 0; i < row; i++) {
        let rows = new Array(colums).fill(0);
        rows.push(1);
        rows.unshift(1);

        getEmptyBoard.push(rows);
    }

    getEmptyBoard.push(r);
    getEmptyBoard.push(r);

    return getEmptyBoard
}