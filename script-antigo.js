//  Este é um script antigo, feito para treinar minhas capacidades de lógica de programação, e não tem a melhor estrutura possível. 
//  Por não usar a biblioteca 'Date' para calcular o tempo decorrido, o navegador congela o cronometro quando a aba é suspensa.


const cronometro = document.querySelector(".cronometro") 
let status = 0 

//let buttons = document.querySelector(".buttons")
let playButton = document.querySelector("#play")
//let pauseButton = document.querySelector("#pause")
let resetButton = document.querySelector("#reset")

const textoIniciar = `<img src="img/play.png" alt=""> <br>Iniciar`
const textoPausar = `<img src="img/pause.png" alt=""> <br>Pausar`
const textoContinuar = `<img src="img/play.png" alt=""> <br>Continuar`


let horas = 0
let minutos = 0 
let segundos = 0


playButton.addEventListener("click", async function startCronometro(){    
    resetButton.removeAttribute('hidden') // exibir o botao

    if (status == 0){ // se tiver DESLIGADO
        status = 1 // LIGA (inicia)
        playButton.innerHTML = textoPausar
    } 
    else { //if (status == 1){  // se estiver LIGADO
        status = 0 // DESLIGA (pausa)
        playButton.innerHTML = textoContinuar
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

        await delay(1000)// 1seg
    }
})


resetButton.addEventListener("click", ()=>{
    status = horas = minutos = segundos = 0 // zera tudo (ou seja, para o cronometro)
    
    cronometro.innerHTML = `${pad(minutos, 2)}:${pad(segundos,2)}` // escreve no html o valor padrão

    playButton.innerHTML = textoIniciar
    resetButton.setAttribute('hidden','hidden')
})




// Source - https://stackoverflow.com/a/2998822
// Posted by InfinitiesLoop, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-22, License - CC BY-SA 4.0
function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}
