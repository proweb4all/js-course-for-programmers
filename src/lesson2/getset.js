/* let rectangle = {
	width: 10,
	height: 20
};

Object.defineProperty(rectangle, 'square', {
	get(){
		return this.width * this.height;
	}
});

console.log(rectangle.square);
rectangle.width = 100;
console.log(rectangle.square); */

/*
	new Vue({
		el: '.a',
		data: {
			width: 100,
			height: 20,
			a: 0,
			b: 1
		},
		computed: {
			square(){
				return this.width * this.height;
			}
		}
	})

	$data = {
		width: 50,
		height: 20
	}

	$cache = {
		square = 100
	}

	vm.width = 50

*/


let rectangle = {
	_private: {
		square: 0,
		width: 0,
		height: 0
	}
};

Object.defineProperty(rectangle, 'square', {
	get(){
		return this._private.square;
	}
});

Object.defineProperty(rectangle, 'width', {
	get(){
		return this._private.width;
	},
	set(value){
		this._private.width = value;
		this._private.square = this._private.width * this._private.height;
	}
});

Object.defineProperty(rectangle, 'height', {
	get(){
		return this._private.height;
	},
	set(value){
		this._private.height = value;
		this._private.square = this._private.width * this._private.height;
	}
});

rectangle.width = 100;
rectangle.height = 20;
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.square);

rectangle.height = 50;
console.log(rectangle.square);
console.log(rectangle.square);
console.log(rectangle.square);