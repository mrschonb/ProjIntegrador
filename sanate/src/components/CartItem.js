const CartItem = ({ name, brand, price, onAdd, onRemove, arrPos }) => {
	return (
		<div className="cart-item">
			<p>Product name: {name}</p>
			<p>Brand: {brand}</p>
			<p>Price: ${price.toFixed(2)}</p>
			<button className="product-btn" onClick={()=> onRemove(arrPos) }>Remove from cart</button>
		</div>
	)
}

export default CartItem