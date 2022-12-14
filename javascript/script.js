
/*Declaração de Constantes (Id e Class) - buttonStart, buttonPause, buttonRestart e Time*/
const buttonStart = document.getElementById("buttonStart");
const buttonPause = document.getElementById("buttonPause");
const buttonRestart = document.getElementById("buttonRestart");
const Time = document.getElementsByClassName("Time");

/*Declaração de Variáveis (Vetores e auxiliares) - vetor e cronometro*/
let vetor = [0,0,0,0];
let cronometro;

/*Funções Principais - () /Start/, () /Pause/ e () /Restart/ */
buttonStart.addEventListener("click", ()=>{
    clearInterval(cronometro);
    cronometro = setInterval(()=>{
        counter();
    },10)
})

buttonPause.addEventListener("click", ()=>{
    clearInterval(cronometro);
})

buttonRestart.addEventListener("click", ()=>{
    for(let i = 0; i < 4; i++){
        Time[i].innerText = `00`;
        vetor[i] = 0;
    }
})

/*Funções Auxiliares (CSS) - counter(), validation(index, value) e SettingText(date)*/
function counter(){
    validation(3,100);
    validation(2,60);
    validation(1,60);
    for(var i = 0; i < 4; i++){
        Time[i].innerText = `${SettingText(vetor[i])}`
    }
    vetor[3] += 1;
}

function validation(index, value){
    if(vetor[index] == value){
        vetor[index-1] += 1;
        vetor[index] = 0;
    }
}

function SettingText(date){
    return date >= 10 ? date : `0${date}`; 
}
