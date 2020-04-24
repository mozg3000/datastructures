const Queue = require('../js/queue.js');

describe("Queue", function(){
	
	it("common", function(){
		const queue = new Queue();
		expect(queue.isEmpty()).toBe(true);
		queue.push(1);
		expect(queue.isEmpty()).toBe(false);
		queue.push(2);
		expect(queue.isEmpty()).toBe(false);
		queue.push(3);
		expect(queue.isEmpty()).toBe(false);
		expect(queue.pop()).toEqual(1);
		expect(queue.isEmpty()).toBe(false);
		expect(queue.pop()).toEqual(2);
		expect(queue.isEmpty()).toBe(false);
		expect(queue.pop()).toEqual(3);
		expect(queue.isEmpty()).toBe(true);
		queue.push(9);
		expect(queue.isEmpty()).toBe(false);
		expect(queue.pop()).toEqual(9);
		expect(queue.isEmpty()).toBe(true);
		expect(queue.pop()).toBeNull();
	});
	it("initialized in constructor", function(){
		const queue = new Queue(7);
		expect(queue.isEmpty()).toBe(false);
		queue.push(6);
		expect(queue.isEmpty()).toBe(false);
		expect(queue.pop()).toEqual(7);
		expect(queue.isEmpty()).toBe(false);
		expect(queue.pop()).toEqual(6);
		expect(queue.isEmpty()).toBe(true);
	});
});