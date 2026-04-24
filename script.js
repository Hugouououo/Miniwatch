const cronometro = document.querySelector(".cronometro") 
let status = 0 // "flag"

//let buttons = document.querySelector(".buttons")
let playButton = document.querySelector("#play")
//let pauseButton = document.querySelector("#pause")
let resetButton = document.querySelector("#reset")

let horas = 0
let minutos = 0 
let segundos = 0

playButton.addEventListener("click", async function startCronometro(){    

    // se tiver DESLIGADO
    if (status == 0){
        status = 1 // LIGA (inicia)
        playButton.innerHTML = 'Pausar'
    } 
    // se estiver LIGADO
    else if (status == 1){
        status = 0 // DESLIGA (pausa)
        playButton.innerHTML = 'Continuar'
    } 

    const delay =(ms)=> new Promise(resolve => setTimeout(resolve,ms))   

    while (status == 1){ // se o status for LIGADO
        if(horas >= 1){
            cronometro.innerHTML = `${pad(horas, 2)}:${pad(minutos, 2)}:${pad(segundos,2)}`
        } else { 
            cronometro.innerHTML = `${pad(minutos, 2)}:${pad(segundos,2)}`
        }

        segundos++
        if(segundos == 60) minutos++, segundos=0
        if(minutos == 60) horas++, minutos=0

        await delay(10)// 1seg
    }
})

resetButton.addEventListener("click", ()=>{
    // zera tudo (ou seja, para o cronometro)
    status = horas = minutos = segundos = 0
    // escreve no html o valor padrão
    cronometro.innerHTML = `${pad(minutos, 2)}:${pad(segundos,2)}`
    playButton.innerHTML = 'Iniciar'
})










// Source - https://stackoverflow.com/a/2998822
// Posted by InfinitiesLoop, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-22, License - CC BY-SA 4.0
function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}
