const PharmaOrder = ({order_id, date, price, status, items, onUpdate}) => {

	const updateStatus = (e) => {
		//e.preventDefault();
		onUpdate(order_id, "sent");
	}

	return (
		<div className="order">
			<p>Order made on: {date}</p>
			<table>
				<thead>
					<tr><td>Product</td><td>Price</td></tr>
				</thead>
				<tbody>
					{items.map((item) => 
						<tr key={item.item_id}><td>{item.item_name}</td><td>{item.item_price}</td></tr>)}
				</tbody>
			</table>
			<p>Total: ${price}</p>
			<p>Status: {status}</p>
			{status === "Pending" ? <button className='btn' onClick={updateStatus}>Mark as Sent</button> : <> </>}
		</div>
	)
}

export default PharmaOrder