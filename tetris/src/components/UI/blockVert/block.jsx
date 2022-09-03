import React from "react";
import classes from './block.module.css'

function MyBlock({children}) {
    return(
        <div className={classes.block}>
            {children}
        </div>
    );
}

export default MyBlock