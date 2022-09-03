export default function isMergeMatrix(obj, matrix){
    for(let i = 0; i < obj.matrix.length; i++){
        for(let j = 0; j < obj.matrix[i].length; j++){
            matrix[obj.pos.y + i][obj.pos.x + j + 1] = matrix[obj.pos.y + i][obj.pos.x + j + 1] || obj.matrix[i][j]
        }
    }
}