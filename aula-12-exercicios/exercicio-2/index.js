//Escrever uma função que soma dois parametros
function soma (a, b) {
    return a+b


}
//Escrever uma função que indica se o primeiro é maior ou igual ao segundo
function maiorIgual (a,b) {
    return a>= b
}
//Escrever uma função que indica se o parametro é par ou impar
function verificarNumeroparouimpar(numero){
    const numeroPar= (numero%2) ===0
    return numeroPar
}
//Escrever uma função que recebe uma string e imprime o tamanho e uma versão maiuscula
function dadosMensagem(mensagem){
    const tamanho = mensagem.length
    const maiuscula = mensagem.toUpperCase()
    console.log (tamanho,maiuscula)
}
 console.log (soma(5,10))
 console.log (maiorIgual(-10,10))
 console.log (verificarNumeroPar(100))
 console.log (verificarNumeroPar(3))
 dadosMensagem("Amanhã tem jogo, não esquece")
 