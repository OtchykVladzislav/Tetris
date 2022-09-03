import React from "react";
import classes from './text.module.css'

function MyText({children}){
    return (
        <div className={classes.text}>
            {children}
        </div>
    );
}

export default MyText