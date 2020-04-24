const List = require('../js/list.js');

describe("List", function(){
	
	it("single element case", function(){
		const list = new List();
		expect(list.isEmpty()).toBe(true);
		list.push(1); //[1]
		expect(list.isEmpty()).toBe(false);
		expect(list.includes(1)).toBe(true);
		expect(list.pop()).toEqual(1); //[0]
		expect(list.isEmpty()).toBe(true);
		list.unshift(9); //[9]
		expect(list.isEmpty()).toBe(false);
		// console.log('unshift',list);
		expect(list.shift()).toEqual(9);
	// console.log(list);
		expect(list.isEmpty()).toBe(true);
		expect(list.includes(66)).toBe(false);
		expect(list.remove(66)).toEqual(0);
		expect(list.pop()).toBeNull();
		expect(list.shift()).toBeNull();
		list.push(5);
		expect(list.includes(5)).toBe(true);
	});
	// it("common", function(){
		// const list = new List();
		// expect(list.length()).toEqual(0);
		// expect(list.insert(7,9)).toEqual(1);// [7]
		// expect(list.isEmpty()).toBe(false);
		// expect(list.length()).toEqual(1);
		// list.push(1); // [71]
		// expect(list.isEmpty()).toBe(false);
		// expect(list.length()).toEqual(2);
		// list.unshift(2); // [271]
		// expect(list.length()).toEqual(3);
		// list.push(3); [2713]
		// expect(list.length()).toEqual(4);
		// list.unshift(4); //[42713]
		// expect(list.length()).toEqual(5);
		// expect(list.insert(5,0)).toEqual(1); // [542713]
		// expect(list.length()).toEqual(6);
		// list.print();
		// expect(list.insert(6,3)).toEqual(1); //[5426713]
		// list.print();
		// expect(list.length()).toEqual(7);
		// expect(list.insert(7, list.length()-1)).toEqual(1); //[54267173]
		// expect(list.length()).toEqual(8);
		// list.print();
		// expect(list.pop()).toEqual(3); //[5426717]
		// expect(list.shift()).toEqual(5); //[426717]
		// expect(list.remove(66)).toEqual(0);
		// expect(list.remove(7)).toEqual(1); //[42617]
		// expect(list.remove(7)).toEqual(1); //[4261]
		// expect(list.remove(4)).toEqual(1); //[261]
		// list.print();
		
	// });
	it("common", function(){
		const list = new List();
		expect(list.length()).toEqual(0);
		expect(list.insert(7,9)).toEqual(1);// [7]
		expect(list.isEmpty()).toBe(false);
		expect(list.length()).toEqual(1);
		list.push(1); // [17]
		expect(list.isEmpty()).toBe(false);
		expect(list.length()).toEqual(2);
		list.unshift(2); // [172]
		expect(list.length()).toEqual(3);
		list.push(3); //[3172]
		expect(list.length()).toEqual(4);
		list.unshift(4); //[31724]
		expect(list.length()).toEqual(5);
		// list.print();
		expect(list.insert(5,0)).toEqual(1); // [317245]
		expect(list.length()).toEqual(6);
		// list.print();
		expect(list.insert(6,3)).toEqual(1); //[3176245]
		// list.print();
		// console.log(list.tail);
		// console.log(list.tail.prev);
		// console.log(list.tail.prev.prev);
		// console.log(list.tail.prev.prev.prev);
		// console.log(list.tail.prev.prev.prev.prev);
		expect(list.length()).toEqual(7);
		expect(list.insert(7, list.length())).toEqual(1); //[73176245]
		expect(list.length()).toEqual(8);
		// list.print();
		// console.log(list.head);
		// console.log(list.head.next);
		// console.log(list.head.next.prev);
		// list.print();
		// console.log(list);
		expect(list.pop()).toEqual(7); //[3176245]
		// list.print();
		// console.log(list.tail);
		// console.log(list.tail.prev);
		// console.log('eeeeee');
		expect(list.shift()).toEqual(5); //[317624]
		// console.log(list.tail);
		// console.log(list.tail.prev);
		// list.print();
		expect(list.remove(66)).toEqual(0);
		expect(list.remove(7)).toEqual(1); //[31624]
		// console.log(list.head);
		// console.log(list.head.next);
		// console.log(list.head.next.next);
		// console.log(list.tail);
		// console.log(list.tail.prev);
		// console.log(list.tail.prev.prev);
		expect(list.remove(4)).toEqual(1); //[3162]
		expect(list.remove(3)).toEqual(1); //[162]
		list.print();
		
	});
});