import React from "react";
import classes from "./blockImage.module.css";

function BlockImage({children}){
    return(
        <div className={classes.image}>
            {children}
        </div>
    );
}

export default BlockImage