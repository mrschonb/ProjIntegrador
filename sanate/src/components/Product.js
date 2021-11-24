const Product = ({ productInfo, onAdd, cartCounter}) => {
	//onRemove
	// const product_obj = {
	// 	product_id: prodID,
	// 	product_name: name,
	// 	product_price: price,
	// 	product_brand: brand
	// }

	// const [cart_btn_state, setCartBtnState] = useState(0);

	// const toggleProductInCart = () => {
	// 	onAdd(productInfo);
	// 	if(cart_btn_state === 0){
	// 		onAdd(product_obj);
	// 		setCartBtnState(1);
	// 	}else{
	// 		onRemove(product_obj.product_name);
	// 		setCartBtnState(0);
	// 	}	
	// }

	return (
		<div className="product item">
			<p>Product name: {productInfo.name}</p>
			<p>Brand: {productInfo.brand}</p>
			<p>Price: ${productInfo.price.toFixed(2)}</p>
			<button className="product-btn" onClick={() => onAdd(productInfo)}>Add to cart</button>
			<p>{cartCounter(productInfo.name)} currently in cart</p>
		</div>
	)
	//()=> toggleProductInCart() 
	//{cart_btn_state === 0 ? "Add to cart" : "Remove from cart"}
}

export default Product