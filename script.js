const cronometro = document.querySelector(".cronometro") 
let status = 0 

let playButton = document.querySelector("#play")
let resetButton = document.querySelector("#reset")

const textoIniciar = `<img src="img/play.png" alt=""> <br>Iniciar`
const textoPausar = `<img src="img/pause.png" alt=""> <br>Pausar`
const textoContinuar = `<img src="img/play.png" alt=""> <br>Continuar`

const data = new Date()
let tempoInicial
let tempoAcumulado = 0

playButton.addEventListener("click", function startCronometro() {
    resetButton.removeAttribute('hidden');

    if (status == 0) {
        status = 1; // LIGA (inicia)
        playButton.innerHTML = textoPausar;

        tempoInicial = Date.now() - tempoAcumulado;

        timerInterval = setInterval(() => {
            
            // tempoPassado = tempoAtual - tempoInicial
            const tempoPassado = Date.now() - tempoInicial;
            
            // convertendo milissegungos p horas, minutos e segundos
            let segundos = Math.floor((tempoPassado / 1000) % 60);
            let minutos = Math.floor((tempoPassado / (1000 * 60)) % 60);
            let horas = Math.floor((tempoPassado / (1000 * 60 * 60)));

            if (horas >= 1) {
                cronometro.innerHTML = `${pad(horas, 2)}:${pad(minutos, 2)}:${pad(segundos, 2)}`;
            } else {
                cronometro.innerHTML = `${pad(minutos, 2)}:${pad(segundos, 2)}`;
            }

        }, 100); // 100ms

    } else {
        status = 0; // DESLIGA (pausa)
        playButton.innerHTML = textoContinuar;

        // salva o progresso atual, para evitar que o navegador congele o cronometro
        tempoAcumulado = Date.now() - tempoInicial;
    }
})


// Source - https://stackoverflow.com/a/2998822
// Posted by InfinitiesLoop, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-22, License - CC BY-SA 4.0
function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}
