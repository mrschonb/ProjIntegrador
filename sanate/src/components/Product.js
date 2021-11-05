import { useState } from 'react';

const Product = ({ prodID, name, brand, price, onAdd, onRemove }) => {
	const product_obj = {
		product_id: prodID,
		product_name: name,
		product_price: price,
		product_brand: brand
	}

	const [cart_btn_state, setCartBtnState] = useState(0);

	const toggleProductInCart = () => {
		if(cart_btn_state === 0){
			onAdd(product_obj);
			setCartBtnState(1);
		}else{
			onRemove(product_obj.product_name);
			setCartBtnState(0);
		}	
	}

	return (
		<div className="product">
			<p>Product name: {name}</p>
			<p>Brand: {brand}</p>
			<p>Price: ${price}</p>
			<button onClick={()=> toggleProductInCart() }>{cart_btn_state === 0 ? "Add to cart" : "Remove from cart"}</button>
		</div>
	)
}

export default Product