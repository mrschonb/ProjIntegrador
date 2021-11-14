const UserSettings = ({user}) => {
	return (
		<div className="user-settings">
		<h5>
			{"Welcome, "+user.name+"!"}
		</h5>
		</div>
	)
}

export default UserSettings