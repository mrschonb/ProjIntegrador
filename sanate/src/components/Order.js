const Order = ({ date, price, status }) => {
	return (
		<div className="order">
			<p>Date: {date}</p>
			<p>Price: ${price}</p>
			<p>Status: {status}</p>
		</div>
	)
}

export default Order