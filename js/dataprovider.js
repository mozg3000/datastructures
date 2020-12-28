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
		if(this.filters){
			let filteredData = this.filters.forEach(
				(filter) => {
					if(filter.on){
						this.filteredData = this.filteredData.filter(filter.filter);
					}
				}
			);
		}
		if(this.sorters){
			this.sorters.forEach(
					(sorter) => {
						if(sorter.on){
							this.filteredData.sort(sorter.sorter)
					}
				}
			);
		}
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