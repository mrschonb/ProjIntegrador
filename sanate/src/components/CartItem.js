const CartItem = ({ name, brand, price, onAdd, onRemove }) => {
	return (
		<div className="cart-item">
			<p>Product name: {name}</p>
			<p>Brand: {brand}</p>
			<p>Price: ${price}</p>
			<button className="product-btn" onClick={()=> onRemove(name) }>Remove from cart</button>
		</div>
	)
}

export default CartItem