import Product from './Product';

const ProductList = ({ products }) => {
	return (
		<>
			{products.map((product) => (
				<Product name={product.name} brand={product.brand} price={product.price} />
			))}
		</>
	)
}

export default ProductList