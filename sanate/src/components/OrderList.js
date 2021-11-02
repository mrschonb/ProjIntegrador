import Order from './Order';

const OrderList = ({ orders }) => {
	return (
		<>
			{orders.map((order) => (
				<Order date={order.date} price={order.price} status={order.status} />
			))}
		</>
	)
}

export default OrderList