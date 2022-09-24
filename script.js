
/*Declaration of variables*/
let Hours = 0;
let Minutes = 0;
let Seconds = 0;
let Miliseconds = 0;
let cronometro;

/*Auxiliary Functions*/
function Setting(date){
    return date > 10 ? date : `0${date}`; 
}
function counter(){
    if(Miliseconds == 100){
        Seconds += 1;
        Miliseconds = 0;
    }
    if(Seconds == 60){
        Minutes += 1;
        Seconds = 0;
    }
    if(Minutes == 60){
        Hours += 1;
        Minutes = 0;
    }
    document.getElementById('Hours').innerText = `${Setting(Hours)}`;
    document.getElementById('Minutes').innerText = `${Setting(Minutes)}`;
    document.getElementById('Seconds').innerText = `${Setting(Seconds)}`;
    document.getElementById('Miliseconds').innerText = `${Setting(Miliseconds)}`;
    Miliseconds+= 1;
}

/*Main Functions - Described by your Name*/
function start(){
    pause();
    cronometro =  setInterval(()=>{counter();}, 10);
}
function pause(){
    clearInterval(cronometro);
}
function reset(){
    Hours = 0;
    Minutes = 0;
    Seconds = 0;
    Miliseconds = 0;
    document.getElementById('Hours').innerText = `00`;
    document.getElementById('Minutes').innerText = `00`;
    document.getElementById('Seconds').innerText = `00`;
    document.getElementById('Miliseconds').innerText = `00`;
}