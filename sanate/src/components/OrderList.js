import Order from './Order';
import PharmaOrder from './PharmaOrder'
//import PropTypes from 'prop-types';

const OrderList = ({ orders, mode, onUpdate }) => {
	//console.log(orders);
	
	if(mode === "Pharmacist"){
		return(
			<>
				{orders.map((order, index) => 
					<PharmaOrder key={index} order_id={order.id} date={order.date} price={order.price} status={order.status} items={order.items} onUpdate={onUpdate}/>
				)}
			</>
			);
	}else{
		return (
			<>
				{orders.map((order, index) => 
					<Order key={index} date={order.date} price={order.price} status={order.status} items={order.items} />
				)}
			</>
		);
	}
}

//<div className="order-container container">

// OrderList.defaultProps = {
// 	onUpdate: () => {console.log("There are no easter eggs here...");}
// };

// OrderList.propTypes = {
// 	onUpdate: PropTypes.func
// };

export default OrderList