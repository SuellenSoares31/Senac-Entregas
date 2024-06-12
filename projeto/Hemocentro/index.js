
// Definições básicas
let continuar = true
const dados = []


// Função para cadastro
function cadastrar() {
	let nome= prompt("Qual seu nome?")
	let idade= prompt("Qual sua idade?")
	let peso= prompt("Qual seu peso?")
	let tiposanguíneo= prompt("Qual seu tipo sanguíneo?")
	let ultimadoacao= prompt("Qual foi sua ultima doacao?")
	
 
	console.log("Função de cadastrar")

	let objeto= {nome:nome,
		idade:idade,
		peso:peso,
		tiposanguíneo:tiposanguíneo,
		ultimadoacao:ultimadoacao,


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
	console.log("Buscar doadores")

	const buscar= prompt("Qual seu tipo sanguíneo?")

	for (let i = 0; i< dados.length; i ++){
		
		const item = dados [i]

		if (item.sangue === buscar){
			console.log(`$ { i + 1} | $ {item.nome} | $ {item.nascimento} |  $ {item.peso} |  $ {item.sangue} |  $ {item.doacao}`)
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
	let pergunta  = "SISTEMA DE CADASTRO DE DOADORES DE SANGUE\n"
		pergunta += "-------------------------\n"
		pergunta += "Escolha uma opção:\n"
		pergunta += "1. Cadastrar doador\n"
		pergunta += "2. Listar doadores\n"
		pergunta += "3. Buscar doador por tipo sanguíneo\n"
		pergunta += "4. Buscar doador por data da última doação"
		pergunta +=  "0. Sair"

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
		case 4:
			buscar()
			break
		case 0:
			buscar	
	}
}
