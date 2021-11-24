import InventoryItem from './InventoryItem';

const Inventory = ({products, onRestock}) => {
	return (
		<div className="inventory-container container">
			{products.map( (product, index) => <InventoryItem key={index} listIndex={index} onRestock={onRestock} productInfo={product}/>)}
		</div>
	)
}

export default Inventory