export default function isRotate(oldMatrix, num){
    let matrix = []
    for(let i in oldMatrix) matrix.push([]);

    if(num == 1){
        oldMatrix.map((row, i) =>
            row.map((val, j) => matrix[j][oldMatrix.length - 1 - i] = oldMatrix[i][j]) 
        );
    }
    else{
        oldMatrix.map((row, i) =>
            row.map((val, j) => matrix[oldMatrix.length - 1 - j][i] = oldMatrix[i][j])
        );
    }
    return matrix
}