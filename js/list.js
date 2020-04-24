const Queue = require('./queue.js');
const Stack = require('./stack.js');

module.exports = class List extends Queue{
	constructor(value){
		super(value);
	}
	// Looking for the value in collection and return true if it was fount or false else.
	includes(value, comparator = (a, b) => a===b){
		
		for(let pointer = this.head; pointer; pointer = pointer.next){
			if(comparator(pointer.value, value)){
				return true;
			}
		}

		return false;
	}
	// Find out length of the collection
	length(){
		let count = 0;
		if(this.head){
			count++;
			for(let pointer = this.head; pointer.next; pointer = pointer.next){
				count++;
			}
		}
		return count;
	}
	// Concatinate two (sub)list
	concat(list){
		if(this.head){
			let pointer = this.getLastNode();
		pointer.next = list.head;
		}else{
			this.head = list.head;
		}
	}
	// Deletes this.Node containing value from list 
	remove(value, comparator = (a, b) => a===b){
		// if(this.head){
			// if(comparator(this.head.value, value)){
				// this.head = this.head.next;
				// return 1;
			// }else{
				// let prev = this.getOneNodeBefore(value, comparator);
				// if(prev){
					// prev.next = prev.next.next;
					// return 1;
				// }else{
					// return 0;
				// }
			// }
		// }else{
			// return 0;
		// }
		if(this.head){
			if(comparator(this.head.value, value)){
				if(this.head.next){
					this.head = this.head.next;
					this.head.prev = null;
				}else{
					this.head = this.tail = null;
				}
				return 1;
			}else{
				let pointer = this.head,
				found = false;
				// console.log(this.head);
				for(;pointer.next; pointer = pointer.next) {
					if(comparator(pointer.value, value)) {
						// console.log('this',this.head);
						// console.log('this',this.head.next);
						// console.log('this',this.head.next.next);
						// console.log('this',this.head.next.next.next);
						// console.log('this',pointer.prev);
						// console.log('this',pointer.next);
						pointer.prev.next = pointer.next;
						pointer.next.prev = pointer.prev;
						// console.log('this',this.head);
						// console.log('this',this.head.next);
						// console.log('this',this.head.next.next);
						// console.log('this',this.head.next.next.next);
						found = true;
						return 1;
					}
				}
				
				if(comparator(pointer.value, value)){
					found = true;
					pointer.next = null;
					this.tail = pointer.prev;
					pointer.prev.next = null;
					// console.log('ssssss',pointer.prev);
					return 1;
				}
				return 0;
			}
		}else{
			return 0;
		}
	}
	// Returns this.Node before but one the value
	getOneNodeBefore (value, comparator) {
		let pointer = this.head,
			prev = this.head,
			found = false;
		if (value) {
			for(;pointer.next; prev = pointer, pointer = pointer.next) {
				if(comparator(pointer.value, value)) {
					found = true;
					break;
				}
			}
		}else{
			prev = getLastButOneNode();
		}
		if(comparator(pointer.value, value)){
			found = true;
		}
		return found ? prev : null;
	}
	// Insert this.Node in the certain position or to the end if index greate of the collection length
	insert (value, index) {
		if(this.isEmpty()){
			this.tail = this.head = new this.Node(value);
		}else{
			if(index === 0) {
				let newNode = new this.Node(value);
				newNode.prev = this.tail;
				this.tail.next = newNode;
				this.tail = newNode;
				
				return 1;
			}
			let pointer = this.tail,
				prevN = this.tail;
			for (let i = 0; i < index && pointer; prevN = pointer, pointer = pointer.prev, i++) {
				continue;
			}
			const newNode = new this.Node(value);
			prevN.prev = newNode;
			prevN.prev.next = prevN;
			if(pointer){
				prevN.prev.next = prevN;
				prevN.prev.prev = pointer;
				pointer.next = prevN.prev;
			}else{
				this.head = newNode;
			}
		}
		return 1;
	}
	pop(){
		let value = null;
		
		if(this.head){
			value = this.head.value;
			if(this.head.next){
				this.head = this.head.next;
				this.head.prev = null;
			}else{
				this.head = this.tail = null;
			}
		}
		
		return value;
	}
	// Adds this.Node to the head of the list
	unshift (value) {
		let newTail= new this.Node(value);
		if(!this.isEmpty()){
			this.tail.next = newTail;
			newTail.prev= this.tail;
			this.tail = newTail;
		}else{
			this.tail = this.head = newTail;
		}
		return 1;
	}
	// Takes off the first this.Node and returns its value
	shift () {
		let value = null;
		if(!this.isEmpty()){
			value = this.tail.value;
			
			// console.log('ttttt', this.tail);
			if(this.tail.prev){
				this.tail = this.tail.prev;
				this.tail.next = null;
			}else{
				this.tail = this.head = null;	
			}
			// if(this.tail){
				// this.tail = this.tail.prev = null;
			// }else{
				// this.tail = this.tail;
			// }
		}
		return value;
	}
	// Iterator
	[Symbol.iterator](){
		let current = { next: this.head };
		const iterator = {
			next(){
				if(current.next){
					current = current.next;
					return {
						done: false,
						value: current.value
					}
				}else{
					return {
						done: true
					}
				}  
			}
		}
		return iterator; 
    }
}