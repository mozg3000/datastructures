const List = require('./list.js');
module.exports = class DataProvider{
	constructor(obj){
		this.data = obj.data;
		this.filters = obj.filters
		this.sorters = obj.sorters
		this.filteredData = [...obj.data]
	}
	// Iterator
	[Symbol.iterator](){
		this.filteredData = [...this.data];
		let filteredData = this.filters.forEach(
			(filter) => {
				this.filteredData = this.filteredData.filter(filter);
			}
		);
		this.sorters.forEach(
			(sorter) => this.filteredData.sort(sorter)
		);
		let current = this.filteredData[Symbol.iterator]();
		const iterator = {
			next(){
				let next = current.next()
				if(next.done){
					return {
						done: true
					}
				}else{
					return {
						done: false,
						value: next.value
					}
				}
			}
		}
		return iterator;
	}
}