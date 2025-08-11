import React, { useEffect, useState } from 'react';

const Timer=()=>{
    const [time,setTime]=useState(0);
    const[isActive,setIsActive]=useState(false);

    const handlestart=()=>{
        setIsActive(!isActive);

        if(!isActive){
            managetime()
        }else{
            clearTimeout(manageRef.current)
        }
    };

    const handleReset=()=>{
        setTime(0)
        setIsActive(false)
    }

const manageRef =React.useRef();
const managetime = () => {
    const updateTimer = () => {
      setTime((prevSeconds) => prevSeconds + 1);
      manageRef.current= setTimeout(updateTimer, 1000);
    };
    updateTimer()
}
return(
    <>
    <h1>{Math.floor(time/3600)}:{Math.floor((time%3600)/60)}:{time%60}</h1>
    <button onClick={handlestart}>{!isActive?"start":"pause"}</button>
    <button onClick={handleReset}>reset</button>
    </>
)
}
export default Timer;
