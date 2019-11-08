//Criando um object
var pessoa = {
	//add propriedades
	nome: "João",
	idade: 20,
	telefone: null,
	endereco: {
		logradouro: "Av.Brasil",
		numero: 70,
		bairro:"Centro"
	}
};

//Apagando propriedades de um objeto
delete pessoa.telefone;