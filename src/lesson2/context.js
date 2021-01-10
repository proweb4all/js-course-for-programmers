function multSimple(x, y){
	console.log(this);
	return x * y;
}

console.log(multSimple(3, 5));

let math = {
	sum(x, y){
		console.log(this);
		return x * y;
	},
	mult(x, y){
		console.log(this);
		return x * y;
	}
}

console.log(math.mult(3, 5));

let { sum, mult }  = math;
// let sum = math.sum
// let mult = math.mult
mult();

/* 
products
	items = [] // server
	item(id){
		return items.find()
	}

<Cart>
	<Minmax onChange={this.change.bind(this)} />
</Cart> */

function nWidth(n){
	console.log(this);
	return n * this.innerWidth;
}

console.log(nWidth(2));

let box = {
	innerWidth: 10
}

console.log(nWidth.call(box, 2));
console.log(nWidth.call({ innerWidth: 100 }, [2]));
console.log(nWidth.apply(box, [5]));

let numbers = [9, 0, -1, 2, 10, 5];
console.log(Math.max.apply(null, numbers));

let boxNWidth = nWidth.bind(box);
boxNWidth(2);
boxNWidth.call(null, 2);

function multNZ(x, y){
	return x * y;
}

/* function double(n){
	return multNZ(2, n);
} */

let double = multNZ.bind(null, 2);
console.log(double(15));

/* for(let i = 1; i < 5; i++){
	setTimeout(function(){
		console.log(i);
	}, 1000 * i);
} */

for(var i = 1; i < 5; i++){
	setTimeout((function(i){
		console.log(i);
	}).bind(null, i), 1000 * i);
}