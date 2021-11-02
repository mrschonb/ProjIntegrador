const Product = ({ name, brand, price }) => {
	return (
		<div className="product">
			<p>Product name: {name}</p>
			<p>Brand: {brand}</p>
			<p>Price: ${price}</p>
		</div>
	)
}

export default Product