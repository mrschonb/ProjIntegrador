import CartItem from './CartItem';

const Cart = ({items, onRemove, onCheckout}) => {
	// console.log(items);

	const cartCheckout = (e) => {
		e.preventDefault();
		const new_order_items = items.map((item) => {return {
			item_id: item.id,
			item_name: item.name,
			item_price: item.price
		};})

		const today = new Date();

		const result = onCheckout({
			date: today.toDateString(),
			items: new_order_items,
			status: "Pending",
			price: items.reduce((total, item) => total + item.price, 0)
		});

		if(result===1){
			alert("Order created!");
		}else{
			alert("Order creation failed!");
		}
	}

	if(items.length > 0){
		return (
			<>

				{items.map((item) => (
					<CartItem key={item.id} name={item.name} brand={item.brand} price={item.price} onRemove={onRemove}/>
				))}
				<div className="cart-total">
					<h2>Total: ${items.reduce((total, item) => total + item.price, 0)}</h2> <button onClick={cartCheckout} className='btn'>Check-out</button>
				</div>
			</>
		)
	}else{
		return (<p>Cart is empty...</p>)
	}
}

/*
id: 1,
date: "Today",
items: [
{item_id: 0, item_name: "Capriflex", item_price: 384.37},
{item_id: 1, item_name: "Zanderprofen", item_price: 314.90},
{item_id: 2, item_name: "Tetracin", item_price: 118.53}
]
*/

export default Cart