module.exports = class Stack {
	constructor(value) {
		this.Node = class {
			constructor(invalue){
				this.value = invalue;
				this.next = null;
			}
		}
		this.head = value ? new this.Node(value) : null;
	}
	// Takes off last this.Node and returns value
	pop() {
		let value = null;
		if(this.head){
			if(this.head.next){
				let prev = this.getLastButOneNode();
				value = prev.next.value;
				prev.next = null;
			}else{
				value = this.head.value;
				this.head = null;
			}
		}
		return value;
	}
	// Adds this.Node to the head of the collection
	// push(value){
		// if(!this.head){
			// this.head = new this.Node(value);
		// }else{
			// this.append
		// }
	// }
	push(value){
		if(!this.head){
			this.head = new this.Node(value);
		}else{
			this.append(value);
		}
		return 1;
	}
	append(value){
		this.getLastNode().next = new this.Node(value);
	}
	// Returns last this.Node of the collection
	getLastNode(){
		let pointer = this.head;
		for(; pointer.next; pointer = pointer.next){
			continue;
		}
		return pointer;
	}
	// Returns last but one this.Node
	getLastButOneNode() {
		let pointer = this.head,
			prev = this.head;
		for(;pointer.next; prev = pointer, pointer = pointer.next) {
			continue;
		}
		return prev;
	}
	// Find out length of the collection
	// length(){
		// let count = 0;
		// if(this.head){
			// count++;
			// for(let pointer = this.head; pointer.next; pointer = pointer.next){
				// count++;
			// }
		// }
		// return count;
	// }
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