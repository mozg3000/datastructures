const Stack = require('./stack.js');

module.exports = class Queue extends Stack{
	constructor(value){
		super(value);
	}
	//
	push(value){
		let head = this.head;
		if(head){
			let newNode = new this.Node(value);
			newNode.next = this.head;
			this.head = newNode;
		}else{
			this.head = new this.Node(value);
		}
			return 1;
	}
}