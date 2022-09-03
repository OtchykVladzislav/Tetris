export default function checkLine(matrix){
    let line = 0
    let score = 0
    for(let i = 1; i < matrix.length - 2; i++){
        if(matrix[i].includes(0,1) === false){
            line += 1
            score += matrix[i].reduce((prev, next) => prev + next, 0) - 1 
        }
    }
    return [line, score]
}