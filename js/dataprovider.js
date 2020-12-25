const List = require('./list.js');
module.exports = class DataProvider{
	constructor(obj){
		this.data = obj.data;
	}
	// Iterator
	[Symbol.iterator](){
		return this.data[Symbol.iterator]();
	}
}