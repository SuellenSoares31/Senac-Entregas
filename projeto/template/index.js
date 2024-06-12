
// Definições básicas
let continuar = true
const dados = []


// Função para cadastro
function cadastrar() {
	let nome= prompt("Qual seu nome?")
	let endereco= prompt("Qual seu endereço?")
	let capacidade= prompt("Qual sua capacidade?")
	let telefone= prompt("Qual seu telefone?")
	let cidade= prompt("Qual seu cidade?")
 
	console.log("Função de cadastrar")

	let objeto= {nome:nome,
		endereco:endereco,
		capacidade:capacidade,
		telefone:telefone,
		cidade:cidade,


	}

	dados.push(objeto)


}


// Função para listar
function listar() {

for(let dado of dados){
		console.log(dado.nome)
	}
	
}


// Função para buscar
function buscar() {
	console.log("Buscar abrigos")

	const buscar= prompt ("Qual seu nome")
	
	for (let i = 0; i < dados.length; i++){
	
		const item = dados [i]

		if ( item.nome === buscar){
			console.log (`$ { i + 1} | $ {item.nome} | $ {item.endereco} |  $ {item.telefone} |  $ {item.capacidade} |  $ {item.cidade}`)
		}
	}
}


// Função para sair
function sair() {
	continuar = false
	console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}


// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let pergunta  = "ABRIGOS TEMPORÁRIOS\n"
		pergunta += "-------------------------\n"
		pergunta += "Escolha uma opção:\n"
		pergunta += "1. Cadastrar abrigo\n"
		pergunta += "2. Listar abrigos\n"
		pergunta += "3. Procurar abrigo\n"
		pergunta += "0. Sair"

	// Guardar resposta
	let resposta = Number(prompt(pergunta))

	// Identificar resposta e chamar função
	switch (resposta) {
		case 1:
			cadastrar()
			break
		case 2:
			listar()
			break
		case 3:
			buscar()
			break
		case 0:
			sair()
			break
	}
}
