var setadireita = window.document.getElementById("setadireita")
var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")
var setaesquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setaesquerda.style ="display:flex"
    setadireita.style ="display:none"
}

function RolarParaEsquerda() {
    leonardo.style ="display:flex"
    setaesquerda.style ="display:none"
    bruna.style ="display:none"
    setadireita.style ="display:flex"
}
