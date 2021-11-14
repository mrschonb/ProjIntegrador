import InventoryItem from './InventoryItem';

const Inventory = ({products, onRestock}) => {
	return (
		<>
			{products.map( (product) => <InventoryItem key={product.id} onRestock={onRestock} productInfo={product}/>)}
		</>
	)
}

export default Inventory