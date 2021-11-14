import Product from './Product';

const ProductList = ({ products, onAdd, cartCounter }) => {
	//onRemove
	return (
		<>
			{products.map((product) => (
				<Product key={product.id} productInfo={product} onAdd={onAdd} cartCounter={cartCounter} />
				// <Product key={product.id} prodID={product.id} name={product.name} brand={product.brand} price={product.price} onAdd={onAdd} cartCounter={cartCounter} />
				// <Product key={product.id} prodID={product.id} name={product.name} brand={product.brand} price={product.price} onAdd={onAdd} onRemove={onRemove}/>
			))}
		</>
	)
}

export default ProductList