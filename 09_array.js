//Criando um array com [];
let carros = [];
carros[0] = "Ka";
carros[2] = "Corsa";
carros[3] = "Palio";

let carros = ["Ka","Corsa","Palio"];

let carros = new Array("Ka","Corsa","Palio");

let carros = new Array(10); 

//API array
carros.valueOf();
carros.toString();
carros.length
carros.push("Gol");
carros.pop();
carros.unshift("Gol"); // Add no inicio do array
carros.shift(); //Rm o 1° elemento
carros.indexOf("Corsa");
carros.splice(1, 1) //1° parametro = posição; 
carros.splice(1, 1, "Sonic") //3° parametro = itens a serem add; 
carros.reverse();  
carros.sort();
carros.sort(function (a, b){
	return a.preco - b.preco;
});
carros.join(";");