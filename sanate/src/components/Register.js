import { useState } from 'react';

const Register = ({ user, onRegister, pharmacies }) => {
	const [user_name, setUserName] = useState(user.name ? user.name : "");
	const [user_email, setEmail] = useState(user.email ? user.email : "");
	const [user_password, setPassword] = useState("");
	const [user_pass_conf, setPasswordConfirm] = useState("");
	const [user_city, setCity] = useState(user.city ? user.city : "");
	const [user_area, setArea] = useState(user.area ? user.area : "");
	const [user_address, setAddress] = useState(user.address ? user.address : "");
	//const [user_,] = useState();

	// const default_pharmacist = {
 //    name: "Mira Mathis",
 //    email: "sed@tellus.net",
 //    city: "Mexico City",
 //    area: "Santa Fe",
 //    address: "",
 //    type: "Pharmacist"
 //  };

	let cities_set = new Set();
	pharmacies.forEach((ph)=>{
		cities_set.add(ph.city);
	});

	const cities = [...cities_set];

	const onSubmitAction = (e) => {
		e.preventDefault();
		if(
			user_name.trim().length === 0 ||
			user_email.trim().length === 0 ||
			user_city.trim().length === 0 ||
			user_area.trim().length === 0 ||
			user_address.trim().length === 0 ||
			user_password.trim().length === 0){
				alert("Fields cannot be blank.");
				return;
		}
		if(user_password === user_pass_conf){
			console.log("Pass match");
			if(user.type === "Pharmacist"){
				onRegister({
					id: user_email,
					name: user_name,
					email: user_email,
					city: user_city,
					area: user_area,
					address: user_address,
					password: user_password,
					type: "Pharmacist"
				});
			}else{
				onRegister({
					id: user_email,
					name: user_name,
					email: user_email,
					city: user_city,
					area: user_area,
					address: user_address,
					password: user_password,
					type: "Customer"
				});	
			}
		}else{
			alert("Password and password confirmation do not match");
		}
		
	}

	//setCity(pharmacies[0].city);
	//setArea(pharmacies[0].area);

	//console.log(cities);

	/*
	name: "Jeanette Rich",
    email: "volutpat.nunc@tellusfaucibusleo.edu",
    city: "Monterrey",
    area: "Centro",
    type: "Customer"
	*/

	if(user.type === "Pharmacist"){
		return(
			<></>
		)
	}else{
		return (
		<form className="login-form" onSubmit={onSubmitAction}>
	      <div className='form-control'>
	        <label htmlFor='name'>Name: </label>
	        <input id='name' type='text' value={user_name} onChange={(e) => setUserName(e.target.value)}/>
	      </div>

	      <div className='form-control'>
	        <label htmlFor='email'>E-mail: </label>
	        <input id='email' type='text' value={user_email} onChange={(e) => setEmail(e.target.value)}/>
	      </div>
	      
	      <div className='form-control'>
	        <label htmlFor='city'>City: </label>
	        <select id='city' defaultValue={user_city} onChange={(e) =>{setCity(e.target.value)}}>
	        	<option key="NONE" value="NONE"></option>
					{cities.map((city) => 
						//<option key={city} value={city} selected={city === user_city ? "selected" : ""}>{city}</option>)}
						<option key={city} value={city} >{city}</option>)}
	        </select>
	      </div>
	      
	      <div className='form-control'>
	        <label htmlFor='pharma'>Pharmacy: </label>
	        <select id='pharma' defaultValue={user_area} onChange={(e) => setArea(e.target.value)}>
	        	<option key="NONE" value="NONE"></option>
					{pharmacies.filter((ph) => ph.city === user_city).map((ph) =>
						//<option key={ph.id} value={ph.area} selected={ph.area === user_area ? "selected" : ""}>{ph.area}</option>)}
						<option key={ph.id} value={ph.area} >{ph.area}</option>)}
	        </select>
	      </div>
	      
	      <div className='form-control'>
	      	<label htmlFor='address'>Address: </label>
	      	<input id='address' type='text' value={user_address} onChange={(e) => setAddress(e.target.value)}/>
	      </div>
	      
	      <div className='form-control'>
	        <label htmlFor='password'>Password: </label>
	        <input id='password' type='password' onChange={(e) => setPassword(e.target.value)}/>
	      </div>
	      
	      <div className='form-control'>
	        <label htmlFor='passconf'>Confirm password: </label>
	        <input id='passconf' type='password' onChange={(e) => setPasswordConfirm(e.target.value)}/>
	      </div>
	      
	      <input type='submit' value='Submit' className='btn btn-block'/>
	    </form>
		)	
	}


	
}
//{pharmacies.filter((ph) => ph.city == )}

export default Register