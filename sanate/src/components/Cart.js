import CartItem from './CartItem';

const Cart = ({items, onRemove}) => {
	if(items.length > 0){
		return (
			<>
				{items.map((item) => (
					<CartItem key={item.id} name={item.product_name} brand={item.product_brand} price={item.product_price} onRemove={onRemove}/>
				))}
			</>
		)
	}else{
		return (<p>Cart is empty...</p>)
	}
}

export default Cart