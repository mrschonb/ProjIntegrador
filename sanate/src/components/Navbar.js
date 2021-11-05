import UserSettings from './UserSettings';

const Navbar = ({ changeView }) => {
	return (
		<ul className="navbar">
			<li><h3>Farmacias Sanate</h3></li> 
			<li onClick={() => changeView("products")} >Browse items</li> 
			<li onClick={()=> changeView("orders")} >View orders</li> 
			<li onClick={()=> changeView("cart")} >View cart</li> 
			<li><UserSettings /></li>
		</ul>
	)
}

export default Navbar