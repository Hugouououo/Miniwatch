"use strict";
let cronometro = document.querySelector(".cronometro");
let ligado = false;
let playButton = document.querySelector("#play");
let resetButton = document.querySelector("#reset");
let temaButton = document.querySelector("#alternar-tema");
const textoIniciar = `<img src="img/play.png" alt=""> <br>Iniciar`;
const textoPausar = `<img src="img/pause.png" alt=""> <br>Pausar`;
const textoContinuar = `<img src="img/play.png" alt=""> <br>Continuar`;
const data = new Date();
let tempoInicial;
let tempoAcumulado = 0;
let timerInterval;
playButton.addEventListener("click", function startCronometro() {
    resetButton.removeAttribute('hidden');
    if (ligado == false) {
        ligado = true;
        playButton.innerHTML = textoPausar;
        cronometro.style.opacity = 1;
        tempoInicial = Date.now() - tempoAcumulado;
        timerInterval = setInterval(() => {
            const tempoPassado = Date.now() - tempoInicial;
            let segundos = Math.floor((tempoPassado / 1000) % 60);
            let minutos = Math.floor((tempoPassado / (1000 * 60)) % 60);
            let horas = Math.floor((tempoPassado / (1000 * 60 * 60)));
            if (horas >= 1) {
                cronometro.innerHTML = `${pad(horas, 2)}:${pad(minutos, 2)}:${pad(segundos, 2)}`;
            }
            else {
                cronometro.innerHTML = `${pad(minutos, 2)}:${pad(segundos, 2)}`;
            }
        }, 100);
    }
    else if (ligado == true) {
        ligado = false;
        clearInterval(timerInterval);
        cronometro.style.opacity = 0.5;
        playButton.innerHTML = textoContinuar;
        tempoAcumulado = Date.now() - tempoInicial;
    }
});
resetButton.addEventListener("click", function resetCronometro() {
    ligado = false;
    clearInterval(timerInterval);
    tempoInicial = tempoAcumulado = 0;
    cronometro.innerHTML = `${pad(0, 2)}:${pad(0, 2)}`;
    cronometro.style.opacity = 0.5;
    playButton.innerHTML = textoIniciar;
    resetButton.setAttribute('hidden', 'hidden');
});
const classesTema = ["tema-roxo", "tema-vermelho", "tema-azul", "tema-laranja", "tema-verde"];
let i = 0;
temaButton.addEventListener("click", function alternarTema() {
    document.body.classList.remove(classesTema[i - 1]);
    document.body.classList.add(classesTema[i]);
    i = (i + 1) % classesTema.length;
});
function pad(num, size) {
    num = num.toString();
    while (num.length < size)
        num = "0" + num;
    return num;
}
