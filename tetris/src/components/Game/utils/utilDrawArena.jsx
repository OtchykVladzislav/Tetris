export default function drawArena(ctx, matrix, colors){
    ctx.fillStyle = null
    for(let i = 1; i < matrix.length - 2; i++){
        for(let j = 1; j < matrix[i].length - 1; j++){
            if(matrix[i][j]){
                ctx.fillStyle = colors[matrix[i][j]]
                ctx.fillRect(j-1, i-1, 1, 1);
            }
        }
    }
}