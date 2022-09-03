import player from "./player";
import isColides from "./utils/utilColides";
import { interval, matrix } from "./field";
import isRotate from "./utils/utilRotateMatrix";

export default document.addEventListener("keydown", () => {
    if (event.keyCode === 37 && interval-1) {
        player.pos.x--;
        if(isColides(player, matrix)){
            player.pos.x++;
        }
    } else if (event.keyCode === 39 && interval-1) {
        player.pos.x++;
        if(isColides(player, matrix)){
            player.pos.x--;
        }
    } else if (event.keyCode === 40) {
        player.pos.y++;
    } else if (event.keyCode === 38) {
        player.matrix = isRotate(player.matrix, 1)
        if(isColides(player, matrix)){
            player.matrix = isRotate(player.matrix, -1)
        }
    }
})
