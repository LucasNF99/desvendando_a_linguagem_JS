let counter = 0;

let add = function () {
	return ++counter;
};
console.log(add());
console.log(add());
console.log(add());

let itens = [];
let add = function(item) {
	itens.push(item);
	return itens;
}
console.log(add('A'));
console.log(add('B'));
console.log(add('C'));


let counter = (function(){
	let value = 0;
	return {
		add: function() {
			return ++value;
		}
	};
})();