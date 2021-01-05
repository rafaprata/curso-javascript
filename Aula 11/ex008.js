//Exemplo de condição simples

var vel = ex010.html.window.document.getElementById("textvel")

function calcular(){
console.log(`A velocidade do carro é ${vel}Km/h`)
if (vel > 60){
    console.log(`Você ultrapassou a velocidade permitida. MULTADO!`)
}
console.log(`Dirija sempre com cuidado.`)
}