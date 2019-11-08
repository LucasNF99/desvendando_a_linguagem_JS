//Criando uma expressão regular
let regExp = /9999-9999/;
let telefone = "9999-9999";

console.log(regExp.exec(telefone))//retorna os detalhes
console.log(regExp.test(telefone))//retorna true or false

//2.///////////////////////////////////////////////////////////////////////////////////////////////////////////

let regExp = /\(46\)9999-9999/;
let telefone = "(46)9999-9999";

console.log(regExp.test(telefone));

//3.///////////////////////////////////////////////////////////////////////////////////////////////////////////

let regExp = /^\(46\)9999-9999$/;
let telefone = "O telefone é (46)9999-9999, tratar com João";

console.log(regExp.test(telefone));

//4.///////////////////////////////////////////////////////////////////////////////////////////////////////////

let regExp = /^\([0-9] [0-9]\)[0-9] [0-9] [0-9] [0-9]-[0-9] [0-9] [0-9] [0-9]$/;
let telefone = "(80)9555-1234";

console.log(regExp.test(telefone));

//5.///////////////////////////////////////////////////////////////////////////////////////////////////////////


let regExp = /^\([0-9] {2}\) [0-9] {4}-[0-9] {4}$/;
let telefone = "(80)9555-1234";

console.log(regExp.test(telefone));

//6.///////////////////////////////////////////////////////////////////////////////////////////////////////////


let regExp = /^\([0-9] {2}\) [0-9] {4,5}-[0-9] {4}$/;
let telefone = "(80)99555-1234";

console.log(regExp.test(telefone));

//7.///////////////////////////////////////////////////////////////////////////////////////////////////////////


let regExp = /^\([0-9] {2}\) [0-9] {4,5}-?[0-9] {4}$/;
let telefone = "(80)9555-1234";

console.log(regExp.test(telefone))//retorna true or false 


//8.///////////////////////////////////////////////////////////////////////////////////////////////////////////


let regExp = /<table><tr>(<td>\([0-9] {2}\) [0-9] {4,5}-?[0-9] {4}<\/td>)+<\/tr><\/table>/;
let telefone = "<table><tr><td>(16)888079958</td></tr></table>";

console.log(regExp.test(telefone))//retorna true or false 
