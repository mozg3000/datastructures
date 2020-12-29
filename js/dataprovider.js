module.exports = class DataProvider{
	constructor(obj){
		this._data = obj.data;
		this._filters = obj.filters
		this._sorters = obj.sorters
		this._filteredData = [...obj.data]
		this._touch = false
	}
	toggleSorters(name){
		for(let sorter of this._sorters){
			sorter.on = name === sorter.name? !sorter.on:false;
		}
		this.refresh();
	}
	applyFilter(name){
		for(let filter of this._filters){
			if(filter.name === name){
				filter.on = !filter.on
			}
		}
		this.refresh();
	}
	refresh(){
		this._filteredData = [...this._data];
		this._filt();
		this._sort();
	}
	_sort(){
		if(this._sorters){
			this._sorters.forEach(
					(sorter) => {
						if(sorter.on){
							this._filteredData.sort(sorter.sorter)
					}
				}
			);
		}
	}
	_filt(){
		if(this.filters){
			let filteredData = this.filters.forEach(
				(filter) => {
					if(filter.on){
						this.filteredData = this.filteredData.filter(filter.filter);
					}
				}
			);
		}
	}
	get sorters(){
		return this._sorters;
	}
	get filters(){
		return this._filters;
	}
	find(comparator){
		return this._filteredData.find(comparator);
	}
	// Iterator
	[Symbol.iterator](){
		let current = this._filteredData[Symbol.iterator]();
		const iterator = {
			next(){ 
				return current.next();
			}
		}
		return iterator;
	}
}