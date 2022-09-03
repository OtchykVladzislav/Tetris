import React from "react";
import classes from './text.module.css'

function MyText({children, ...props}){
    return (
        <div {...props} className={classes.text}>
            {children}
        </div>
    );
}

export default MyText