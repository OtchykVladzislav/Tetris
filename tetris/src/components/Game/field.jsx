import React from "react";
import { useRef, useEffect } from "react"
import figures from "./utils/utilFigures";
import colors from "./utils/utilColors"
import drawArena from "./utils/utilDrawArena";
import player from "./player"
import "./move";
import classes from "../Game/style/styleCanvas.module.css"
import createMatrix from "./utils/utilMatrix";
import isDrawPlayer from "./utils/utillDrawPlayer";
import isColides from "./utils/utilColides";
import isMergeMatrix from "./utils/utilMergeArena";
import isRandom from "./utils/utilRand";
import gameOver from "./utils/utilGameOver";
import isClearLine from "./utils/utilClearLine";
import checkLine from "./utils/utilCheckLine";

export let interval = 1000;
const row = 24
const column = 12
export let matrix = createMatrix(column, row)

function MyField({event, eventStart, ...props}){
    const canvasRef = useRef(null)
    const box = 25
    let rand;
    let animateId;
    let score = 0;
    let line = 0;

    document.addEventListener("keydown", (e) => {
        if (e.keyCode === 32){
            interval = 1
        }
    })
    
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.setTransform(box, 0, 0, box, 0, 0)

        let lastTime = 0;
        let count = 0;
        rand = isRandom(figures)
        player.matrix = figures[rand]
        player.color = colors[rand + 1]

        const render = (time = 0) => {
            let dt = time - lastTime
            lastTime = time
            count += dt

            if (count >= interval) {
                player.pos.y++;
                count = 0;
            }

            if(gameOver(matrix, animateId)){
                eventStart(false)
                context.clearRect(0, 0, canvas.width, canvas.height)
                window.cancelAnimationFrame(animateId)
                matrix = createMatrix(column, row)
                document.getElementById("scoreCount").innerHTML = "0"
                document.getElementById("lineCount").innerHTML = "0"
                document.getElementById("start").style.display = "flex"
                document.getElementById("timer").style.display = "none"
            }


            if(isColides(player, matrix)){
                isMergeMatrix(player, matrix)
                line += checkLine(matrix)[0]
                score += checkLine(matrix)[1]
                isClearLine(matrix, column)
                player.pos.x = 5
                player.pos.y = 0

                rand = isRandom(figures)
                player.matrix = figures[rand]
                player.color = colors[rand + 1]

                interval = 1000
            }
            context.clearRect(0, 0, canvas.width, canvas.height)
            drawArena(context, matrix, colors)
            context.fillStyle = player.color
            isDrawPlayer(player, context)
            document.getElementById("scoreCount").innerHTML = score
            document.getElementById("lineCount").innerHTML = line
            animateId = requestAnimationFrame(render)
        }
        
        if(event === true){
            player.pos.x = 5
            player.pos.y = 0
            document.getElementById("start").style.display = "none"
            document.getElementById("timer").style.display = "flex"
            render()
        }

    }, [player])

    return(
        <canvas ref={canvasRef} className={classes.canvas} {...props}></canvas>
    );
}

export default MyField