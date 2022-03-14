// constructors and object instances
import Products from "../model/productsModel";

export function APIfeatures(query, queryString) {
	this.query = query ; // product.find
	this.queryString = queryString; // req.query

	this.paginating = () => {
		const page = this.queryString.page * 1 || 1;
		const limit = this.queryString.limit * 1 || 5;
		const skip = limit * (page - 1);
		const products = this.query.limit(limit).skip(skip)
		return this;
	}
}
