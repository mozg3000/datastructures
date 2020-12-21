const Node = require('./node.js');
module.exports = class BinaryNode extends Node{
	constructor(value){
		super(value);
		this.prev = null;
	}
	
}