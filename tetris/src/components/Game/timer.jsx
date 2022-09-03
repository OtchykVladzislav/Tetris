import React, { useEffect } from 'react';
import { useState } from 'react';
import classes from "../UI/text/text.module.css"

function MyTimer({event, children, ...props}) {
    const [ seconds, setSeconds ] = useState(0)
    const [ minute, setMinute ] = useState(0)
    const [ hour, setHour ] = useState(0)
    useEffect(() => {
        const param = setInterval(() => {
            if(event) {
                setSeconds(seconds + 1)
            } 
            else {
                clearInterval(param)
                setSeconds(0)
                setMinute(0)
                setHour(0)
            }
            
            if(seconds === 60){
                setSeconds(0)
                setMinute(minute + 1)
            }
            
            if(minute === 60){
                setMinute(0)
                setHour(hour + 1)
            }
        }, 1000)

        return () => clearInterval(param);
    }, [seconds, minute, hour, event]);

    return(
        <div {...props} className={classes.text}>
            {`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
        </div>
    )
}

export default MyTimer