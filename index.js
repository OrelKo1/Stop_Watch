let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time");


function setTime(){
    const minutes = Math.floor(secondsElapsed/60);
    const seconds= secondsElapsed%60;
    const formatted_min = String(minutes).padStart(2,'0');
    const formatted_sec = String(seconds).padStart(2,'0');
    time.innerHTML=formatted_min+":"+formatted_sec;
}

function startClock(directive){
    if (interval&&directive) resetClock();
    interval=setInterval(() => {
        secondsElapsed++;
        setTime();
    }, 1000);
}


function stopClock(){
    clearInterval(interval);
}


function resetClock(){
    stopClock();
    secondsElapsed=0;
    setTime();
}

