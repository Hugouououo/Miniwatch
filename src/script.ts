let cronometro: any = document.querySelector(".cronometro")! 
let ligado: boolean = false

let playButton = document.querySelector("#play")!
let resetButton = document.querySelector("#reset")!
let temaButton = document.querySelector("#alternar-tema")!

const textoIniciar = `<img src="img/play.png" alt=""> <br>Iniciar`
const textoPausar = `<img src="img/pause.png" alt=""> <br>Pausar`
const textoContinuar = `<img src="img/play.png" alt=""> <br>Continuar`

const data = new Date()
let tempoInicial: number
let tempoAcumulado: number = 0 // se não houvesse "= 0" iria retornar NaN
let timerInterval: number

playButton.addEventListener("click", function startCronometro() {
    resetButton.removeAttribute('hidden')

    if (ligado == false) {
        ligado = true 
        playButton.innerHTML = textoPausar
        cronometro.style.opacity = 1

        tempoInicial = Date.now() - tempoAcumulado

        timerInterval = setInterval(() => {
            
            // tempoPassado = tempoAtual - tempoInicial
            const tempoPassado = Date.now() - tempoInicial
            
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

    } else if (ligado == true) {
        ligado = false
        clearInterval(timerInterval)

        cronometro.style.opacity = 0.5
        playButton.innerHTML = textoContinuar;

        // salva o progresso atual pra evitar que o navegador congele o cronometro
        tempoAcumulado = Date.now() - tempoInicial;
    }
})

resetButton.addEventListener("click", function resetCronometro(){
    ligado = false
    clearInterval(timerInterval)
    
    // reseta o tempo e o display do cronometro
    tempoInicial = tempoAcumulado = 0
    cronometro.innerHTML = `${pad(0, 2)}:${pad(0, 2)}`
    cronometro.style.opacity = 0.5

    // volta os bototes ao inicial
    playButton.innerHTML = textoIniciar
    resetButton.setAttribute('hidden','hidden')
})

// alternar temas:
const classesTema = ["tema-roxo", "tema-vermelho", "tema-azul", "tema-laranja", "tema-verde"]
let i = 0
temaButton.addEventListener("click", function alternarTema() {
    document.body.classList.remove(classesTema[i-1])
    document.body.classList.add(classesTema[i])
    i = (i + 1) % classesTema.length
    // localStorage
    //localStorage.setItem('tema',JSON.stringify(i))
})
// ^ super mega hiper gambiarra

// Source - https://stackoverflow.com/a/2998822
// Posted by InfinitiesLoop, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-22, License - CC BY-SA 4.0
function pad(num:any, size:number) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}
