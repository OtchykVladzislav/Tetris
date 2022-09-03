export default function gameOver(matrix, stop){
    for(let j = 1; j < matrix[3].length - 1; j++){
        if(matrix[1][j]){
            return 1
        }
    }
    return;
}