const Stack = require('../js/stack.js');

describe("Stack", function(){
	let stack = null;
	
	it("is Empty on start", function(){
		stack = new Stack();
		expect(stack.isEmpty()).toBe(true);
	});
	
	it("is not Empty", function(){
		stack.push(1);
		expect(stack.isEmpty()).toBe(false);
	});
	it("is not Empty", function(){
		stack.push(2);
		expect(stack.isEmpty()).toBe(false);
	});	
	it("is not Empty", function(){
		stack.push(3);
		expect(stack.isEmpty()).toBe(false);
	});
	it("pop 3", function(){
		expect(stack.pop()).toEqual(3);
	});
	it("pop 2", function(){
		expect(stack.pop()).toEqual(2);
	});
	it("pop 1", function(){
		expect(stack.pop()).toEqual(1);
	});
	it("is Empty in  the end", function(){
		expect(stack.isEmpty()).toBe(true);
	});
	it("is not Empty after pop to empty", function(){
		stack.push(9);
		expect(stack.isEmpty()).toBe(false);
	});
	it("pop 9 after been Empty", function(){
		expect(stack.pop()).toEqual(9);
	});
});