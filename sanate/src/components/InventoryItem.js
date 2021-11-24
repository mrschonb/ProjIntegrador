const InventoryItem = ({ listIndex, productInfo, onRestock }) => {
	return (
		<div className="item inventory-product product">
			<p>Product name: {productInfo.name}</p>
			<p>Brand: {productInfo.brand}</p>
			<p>Price: ${productInfo.price.toFixed(2)}</p>
			<p>Stock: {productInfo.stock}</p>
			<p>Available in warehouse: {productInfo.warehouse_stock}</p>
			{productInfo.warehouse_stock >= 10 ? <button className="btn" onClick={() => onRestock(productInfo.id, listIndex, 10)}>Request 10 items</button> : <button className="disabled btn" >Request 10 items</button>}
			{productInfo.warehouse_stock >= 50 ? <button className="btn" onClick={() => onRestock(productInfo.id, listIndex, 50)}>Request 50 items</button> : <button className="disabled btn" >Request 50 items</button>}
			{productInfo.warehouse_stock >= 100 ? <button className="btn" onClick={() => onRestock(productInfo.id, listIndex, 100)}>Request 100 items</button> : <button className="disabled btn" >Request 100 items</button>}
		</div>
	)
}


/*
{
  id: 5,
  name: "Tetracin",
  brand: "Pfizer",
  price: 118.53,
  stock: 101
}
*/

export default InventoryItem