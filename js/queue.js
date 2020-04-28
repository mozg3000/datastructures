const Stack = require('./stack.js');

module.exports = class Queue extends Stack{
	constructor(value){
		super(value);
		this.Node = class extends this.Node{
			constructor(value){
				super(value);
				this.prev = null;
			}
		}
		this.tail = this.head;
	}
	_prepend(value){
		const tmp = this.head;
		this.head = new this.Node(value);
		tmp.prev = this.head;
		this.head.next = tmp;
	}
	_addHead(value){
		super._addHead(value);
		this.tail = this.head;
	}
	pop(){
		let value = null;
		if(this.tail !== null){
			value = this.tail.value;
			this.tail = this.tail.prev;
			if(!this.tail){
				this.head = this.tail;
			}
		}
		return value;
	}
}