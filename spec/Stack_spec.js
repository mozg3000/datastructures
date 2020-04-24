const Stack = require('../js/stack.js');

describe("Stack", function(){
	
	it("common", function(){
		const stack = new Stack();
		expect(stack.isEmpty()).toBe(true);
		stack.push(1);
		expect(stack.isEmpty()).toBe(false);
		stack.push(2);
		expect(stack.isEmpty()).toBe(false);
		stack.push(3);
		expect(stack.isEmpty()).toBe(false);
		expect(stack.pop()).toEqual(3);
		expect(stack.isEmpty()).toBe(false);
		expect(stack.pop()).toEqual(2);
		expect(stack.isEmpty()).toBe(false);
		expect(stack.pop()).toEqual(1);
		expect(stack.isEmpty()).toBe(true);
		stack.push(9);
		expect(stack.isEmpty()).toBe(false);
		expect(stack.pop()).toEqual(9);
		expect(stack.isEmpty()).toBe(true);
		expect(stack.pop()).toBeNull();
	});
	it("initialized in constructor", function(){
		let stack = new Stack(7);
		expect(stack.isEmpty()).toBe(false);
		stack.push(6);
		expect(stack.isEmpty()).toBe(false);
		expect(stack.pop()).toEqual(6);
		expect(stack.isEmpty()).toBe(false);
		expect(stack.pop()).toEqual(7);
		expect(stack.isEmpty()).toBe(true);
		expect(stack.pop()).toBeNull();
	});
});