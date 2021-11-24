const Order = ({ date, price, status, items }) => {
	// console.log(items);
	return (
		<div className="order">
			<p>Date: {date}</p>
			<p><strong>Products: </strong></p>
			<ul>
				{items.map((item, index) => 
					<li key={index}>{item}</li>)}
			</ul>
			<p>Price: ${price.toFixed(2)}</p>
			<p>Status: {status}</p>
		</div>
	)
	// Price included in items
	// return (
	// 	<div className="order">
	// 		<p>Date: {date}</p>
	// 		<table>
	// 		<thead>
	// 			<tr><th>Product</th><th>Price</th></tr>
	// 		</thead>
	// 		<tbody>
	// 			{items.map((item) => <tr key={item.item_id}><td>{item.item_name}</td><td>${item.item_price.toFixed(2)}</td></tr> )}
	// 		</tbody>
	// 		</table>
	// 		<p>Price: ${price.toFixed(2)}</p>
	// 		<p>Status: {status}</p>
	// 	</div>
	// )
}

export default Order