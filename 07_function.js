//Criando funções
function soma(a,b) {
	return a + b;
}
console.log(soma);

let soma = function soma(a,b) {
	return a + b;
}


// ---------------------Funções Construtoras vs. Função Fábrica-----------------------------

//Funções Fábrica:
let criarPessoa = function(nome, idade) {
	return {
		nome: nome,
		idade: idade
	};
};
console.log(criarPessoa("Pedro",20));
console.log(criarPessoa("Maria",30));


//Funçõe Construtora
let Pessoa = function (nome,idade) {
	this.nome = nome;
	this.idade = idade;
}
console.log(new Pessoa("Pedro",20));
console.log(new Pessoa("Maria",30));
