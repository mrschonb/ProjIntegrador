const PharmaOrder = ({order_id, date, price, status, items, onUpdate}) => {

	const updateStatus = (e) => {
		//e.preventDefault();
		onUpdate(order_id, "Sent");
	}

	return (
		<div className="order">
			<p>Order made on: {date}</p>
			<p><strong>Products:</strong></p>
			<ul>
				{items.map((item, index) => 
					<li key={index}>{item}</li>)}
			</ul>
			<p>Total: ${price.toFixed(2)}</p>
			<p>Status: {status}</p>
			{status === "Pending" ? <button className='btn' onClick={updateStatus}>Mark as Sent</button> : <button className='disabled btn'>Already sent</button>}
		</div>
	)

	// item price included
	// return (
	// 	<div className="order">
	// 		<p>Order made on: {date}</p>
	// 		<table>
	// 			<thead>
	// 				<tr><td>Product</td><td>Price</td></tr>
	// 			</thead>
	// 			<tbody>
	// 				{items.map((item) => 
	// 					<tr key={item.item_id}><td>{item.item_name}</td><td>{item.item_price.toFixed(2)}</td></tr>)}
	// 			</tbody>
	// 		</table>
	// 		<p>Total: ${price.toFixed(2)}</p>
	// 		<p>Status: {status}</p>
	// 		{status === "Pending" ? <button className='btn' onClick={updateStatus}>Mark as Sent</button> : <> </>}
	// 	</div>
	// )
}

export default PharmaOrder