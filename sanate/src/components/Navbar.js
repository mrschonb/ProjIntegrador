import UserSettings from './UserSettings';

const Navbar = ({ changeView, user }) => {
	if(user.type === "Pharmacist"){
		return(
			<ul className="navbar pharma-navbar">
				<li><h3>Farmacias Sanate</h3></li> 
				<li onClick={() => changeView("orders")} >View orders</li> 
				<li onClick={()=> changeView("restock")} >View inventory</li> 
				<li><UserSettings user={user}/></li>
			</ul>
		);
	}else{
		return (
			<ul className="navbar user-navbar">
				<li><h3>Farmacias Sanate</h3></li> 
				<li onClick={() => changeView("products")} >Browse items</li> 
				<li onClick={()=> changeView("orders")} >View orders</li> 
				<li onClick={()=> changeView("cart")} >View cart</li> 
				<li><UserSettings user={user}/></li>
			</ul>
		)
	}
}

export default Navbar