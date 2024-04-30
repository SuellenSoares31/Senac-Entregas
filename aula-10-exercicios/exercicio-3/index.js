// Criar um array vazio
const listaDeTarefas=[]

// Perguntar ao usuario 3 tarefas e armazenar no array
const tarefa1= prompt ("Digite a tarefa 1")
const tarefa2= prompt ("Digite a tarefa 2")
const tarefa3= prompt ("Digite a tarefa 3")

// Armazenar as tarefas no array
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

// Imprimir o array no console
console.log(listaDeTarefas)

// Solicitar ao usuario um índice
const tarefaRealizada= prompt("Digite o número da tarefa realizada(0,1 ou 2)")

// Remover o item da lista
listaDeTarefas.splice(tarefarealizada,1)

// Imprimir o array no console
console.log (listasDeTarefas)