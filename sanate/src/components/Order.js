const Order = ({ date, price, status, items }) => {
	//console.log(items);
	return (
		<div className="order">
			<p>Date: {date}</p>
			<table>
			<thead>
				<tr><th>Product</th><th>Price</th></tr>
			</thead>
			<tbody>
				{items.map((item) => <tr key={item.item_id}><td>{item.item_name}</td><td>${item.item_price}</td></tr> )}
			</tbody>
			</table>
			<p>Price: ${price}</p>
			<p>Status: {status}</p>
		</div>
	)
}

export default Order