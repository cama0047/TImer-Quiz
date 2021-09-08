import React from 'react'

const stopwatch = ()=>{

   

const { timerTime } = this.state;
let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    return (
      <div className="Stopwatch">
        <div className="Stopwatch-header">Stopwatch</div>
        <div className="Stopwatch-display">

          {hours} : {minutes} : {seconds} : {centiseconds}

        
        </div>
      </div>
    );
}

export default stopwatch
