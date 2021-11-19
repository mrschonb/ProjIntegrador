import UserDisp from './UserDisp';

const Navbar = ({ changeView, user, onLogout }) => {
	if(user.type === "Pharmacist"){
		return(
			<ul className="navbar pharma-navbar">
				<li><h3>Farmacias Sanate</h3></li> 
				<li onClick={() => changeView("orders")} >View orders</li> 
				<li onClick={() => changeView("restock")} >View inventory</li> 
				<li><UserDisp user={user}/></li>
				<li onClick={onLogout}>Log out</li>
			</ul>
		);
	}else{
		return (
			<ul className="navbar user-navbar">
				<li><h3>Farmacias Sanate</h3></li> 
				<li onClick={() => changeView("products")} >Browse items</li> 
				<li onClick={() => changeView("orders")} >View orders</li> 
				<li onClick={() => changeView("cart")} >View cart</li> 
				<li onClick={() => changeView("userprefs")}><UserDisp user={user}/></li>
				<li onClick={onLogout}>Log out</li>
			</ul>
		)
	}
}

export default Navbar