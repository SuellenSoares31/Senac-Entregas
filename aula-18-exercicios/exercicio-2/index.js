Exercício1
const arrayOriginal = [ 80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55 ]

function imprimirLista (lista) {
    
    for (const item of lista){
        console.log(item)
    }
}

imprimirLista(arrayOriginal)

Exercício2
function dividirImprimirLista (Lista){
    for (const item of lista){

    }
        console.log(item/10)

}

Exercício3
function filtrarNumerosPares (lista){
    const numerosPares=[]

for (const item of lista){
    if (item %2 === 0){

    }
 }

 return numerosPares

}

Exercício4
function listarIndices (lista){
    
    const indices=[]
    const total= lista.length

    for(let i = 0; i < total; i ++){
        indices.push(`O elemento do índice ${i} é: ${lista[i]}`)
    }
    return indices
}

Exercício5
 function imprimirMaiorMenor (lista){
    let numeroMaior= Lista [0]
    let numeroMenor= Lista [0]

    const total= lista.length

    for(let i = 0 ;i < total ; i++){
        const numeroAtual= lista[i]

        if (numeroAtual > numeroMaior){
            numeroMaior = numeroAtual
        }
        if (numeroAtual > numeroMenor){
            numeroMenor = numeroAtual
    }
 }

 return[numeroMaior,numeroMenor ]
}