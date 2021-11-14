import { useState } from 'react';

const Register = ({ onRegister, pharmacies }) => {
	const [user_name, setUserName] = useState("");
	const [user_email, setEmail] = useState("");
	const [user_password, setPassword] = useState("");
	const [user_pass_conf, setPasswordConfirm] = useState("");
	const [user_city, setCity] = useState("");
	const [user_area, setArea] = useState("");
	const [user_address, setAddress] = useState("");
	//const [user_,] = useState();

	let cities_set = new Set();
	pharmacies.forEach((ph)=>{
		cities_set.add(ph.city);
	});

	const cities = [...cities_set];

	const registerUser = (e) => {
		e.preventDefault();
		if(user_password === user_pass_conf){
			console.log("Pass match");
		}else{
			console.log("Pass does not match");
		}
		onRegister({
			name: user_name,
			email: user_email,
			city: user_city,
			area: user_area,
			address: user_address,
			//password: user_password
			type: "Customer"
		});
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

	return (
		<form className="login-form" onSubmit={registerUser}>
      <div className='form-control'>
        <label htmlFor='name'>Name: </label>
        <input id='name' type='text' placeholder='Full name' onChange={(e) => setUserName(e.target.value)}/>
      </div>

      <div className='form-control'>
        <label htmlFor='email'>E-mail: </label>
        <input id='email' type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
      </div>
      
      <div className='form-control'>
        <label htmlFor='city'>City: </label>
        <select id='city' onChange={(e) =>{setCity(e.target.value)}}>
        	<option key="NONE" value="NONE"></option>
				{cities.map((city) => 
					<option key={city} value={city}>{city}</option>)}
        </select>
      </div>
      
      <div className='form-control'>
        <label htmlFor='pharma'>Pharmacy: </label>
        <select id='pharma' onChange={(e) => setArea(e.target.value)}>
        	<option key="NONE" value="NONE"></option>
				{pharmacies.filter((ph) => ph.city === user_city).map((ph)=>
					<option key={ph.id} value={ph.area}>{ph.area}</option>)}
        </select>
      </div>
      
      <div className='form-control'>
      	<label htmlFor='address'>Address: </label>
      	<input id='address' type='text' onChange={(e) => setAddress(e.target.value)}/>
      </div>
      
      <div className='form-control'>
        <label htmlFor='password'>Password: </label>
        <input id='password' type='password' onChange={(e) => setPassword(e.target.value)}/>
      </div>
      
      <div className='form-control'>
        <label htmlFor='passconf'>Confirm password: </label>
        <input id='passconf' type='password' onChange={(e) => setPasswordConfirm(e.target.value)}/>
      </div>
      
      <input type='submit' value='Continue' className='btn btn-block'/>
    </form>
	)
}
//{pharmacies.filter((ph) => ph.city == )}

export default Register