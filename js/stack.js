module.exports = class Stack {
	constructor(value) {
		this.Node = class {
			constructor(value){
				this.value = value;
				this.next = null;
				// this.prev = prev;
			}
		}
		this.head = value ? new this.Node(value) : null;
	}
	// Takes off last this.Node and returns value
	pop() {
		let value = null;
		if(!this.isEmpty()){
			value = this.head.value;
			this.head = this.head.next;
		}
		return value;
	}
	// Adds this.Node to the head of the collection
	push(value){
		if(this.isEmpty()){
			this._addHead(value);
		}else{
			this._prepend(value);
		}
		return 1;
	}
	_prepend(value){
		const tmp = this.head;
		this.head = new this.Node(value);
		this.head.next = tmp;
	}
	_addHead(value){
		this.head = new this.Node(value);
	}
	// Return true if collection empty
	isEmpty(){
		return this.head === null;
	}
	// Prints collection to the console.log
	print(){
		if(this.head){
			let pointer = this.head;
			while(pointer.next){
				console.log(pointer.value);
				pointer = pointer.next;
			}
			console.log(pointer.value);
		} else {
			console.log('Empty Collection');
		}
	}
}