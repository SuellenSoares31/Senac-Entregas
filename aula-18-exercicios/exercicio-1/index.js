const bichosdeEstimacao= Number(prompt("Digite a quantos bichos de estimação"))
const lista=[]

if(bichosdeEstimacao <= 0){
    console.log("Que pena! Você sempre pode adotar algum pet")
}
else{
    let contador=0

    while (bichosdeEstimacao > contador) {
        let nome= prompt("Qual o nome do seu pet")
        lista.push(nome)
        contador ++
    }
    console.log(lista)


}