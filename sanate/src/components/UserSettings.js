import { useState } from 'react';

const UserSettings = ({user}) => {
	const [showPrefs, setShowPrefs] = useState(false);

	return (
		<div className="user-settings">
		<h5 onClick={() => setShowPrefs(!showPrefs)}>
			{"Welcome, "+user.name+"!"}
		</h5>
		{showPrefs? <>HELLO</> : <></>}
		</div>
	)
}

export default UserSettings