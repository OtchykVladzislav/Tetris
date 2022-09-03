export default function isColides(obj, matrix){
    for(let i = 0; i < obj.matrix.length; i++){
        for(let j = 0; j < obj.matrix[i].length; j++){
            if(obj.matrix[i][j] && matrix[obj.pos.y + i + 1][obj.pos.x + j + 1]) return 1
        }
    }
    return 0 
}