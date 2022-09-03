export default function isClearLine(matrix, colums){
    for (let i = 1; i < matrix.length-2; i++) {
        let clear = 1;

        for (let j = 1; j < matrix[i].length-1; j++) {
            if (!matrix[i][j])
                clear = 0;
        }

        if (clear) {
            let r = new Array(colums).fill(0);
            r.push(1);
            r.unshift(1);

            matrix.splice(i, 1);
            matrix.splice(1, 0, r);
        }
    }
}