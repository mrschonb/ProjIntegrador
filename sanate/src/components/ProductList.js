import Product from './Product';

const ProductList = ({ products, onAdd, onRemove }) => {
	return (
		<>
			{products.map((product) => (
				<Product key={product.id} prodID={product.id} name={product.name} brand={product.brand} price={product.price} onAdd={onAdd} onRemove={onRemove}/>
			))}
		</>
	)
}

export default ProductList