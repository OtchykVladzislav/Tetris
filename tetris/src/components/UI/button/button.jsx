import React from "react";
import classes from './button.module.css'

function MyBut({children, ...props}){
    return(
        <button {...props} className={classes.but}>
            {children}
        </button>
    );
}

export default MyBut