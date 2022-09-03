export default function isDrawPlayer(obj, ctx){
    for(let i = 0; i < obj.matrix.length; i++){
        for(let j = 0; j < obj.matrix[i].length; j++){
            if(obj.matrix[i][j]) {
                ctx.fillRect(obj.pos.x + j, obj.pos.y + i, 1, 1)
            }
        }
    }
}