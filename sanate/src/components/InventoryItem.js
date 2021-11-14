const InventoryItem = ({ productInfo, onRestock }) => {
	return (
		<div className="product">
			<p>Product name: {productInfo.name}</p>
			<p>Brand: {productInfo.brand}</p>
			<p>Price: ${productInfo.price}</p>
			<p>Stock: {productInfo.stock}</p>
			<button className="btn" onClick={() => onRestock(productInfo.id, 10)}>Request 10 items</button>
			<button className="btn" onClick={() => onRestock(productInfo.id, 50)}>Request 50 items</button>
			<button className="btn" onClick={() => onRestock(productInfo.id, 100)}>Request 100 items</button>
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